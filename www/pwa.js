(function () {
  function _isNative() {
    return !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
  }
  function _getCapacitorPush() {
    return window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.PushNotifications;
  }

  // Service worker for browser/PWA only (WKWebView doesn't support it)
  if (!_isNative() && 'serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        const reg = await navigator.serviceWorker.register('/sw.js');
        console.log('Service worker registered');
        if ('PushManager' in window && Notification.permission === 'granted') {
          const token = localStorage.getItem('guestReadyToken');
          if (token) _setupPushSubscription(reg, token).catch(() => {});
        }
      } catch (err) {
        console.error('Service worker registration failed:', err);
      }
    });
  }

  // APNs setup for native iOS — register listeners and silently re-register if already permitted
  window.addEventListener('load', () => {
    if (!_isNative()) return;
    const Push = _getCapacitorPush();
    if (!Push) return;

    Push.addListener('registration', async (data) => {
      const token = localStorage.getItem('guestReadyToken');
      if (!token || !data.value) return;
      try {
        await fetch('/push/apns-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
          body: JSON.stringify({ token: data.value })
        });
      } catch (e) {}
    });

    Push.addListener('registrationError', (err) => {
      console.error('APNs registration error:', err);
    });

    Push.addListener('pushNotificationReceived', (notification) => {
      console.log('Push notification received (foreground):', notification);
    });

    Push.addListener('pushNotificationActionPerformed', (action) => {
      if (action.notification && action.notification.data && action.notification.data.url) {
        window.location.href = action.notification.data.url;
      }
    });

    // Silently refresh token on every launch if permission was already granted
    Push.checkPermissions().then(result => {
      if (result.receive === 'granted') Push.register();
    }).catch(() => {});
  });
})();

async function _setupPushSubscription(registration, token) {
  const keyRes = await fetch('/push/vapid-public-key');
  if (!keyRes.ok) return;
  const { publicKey } = await keyRes.json();
  if (!publicKey) return;
  await _subscribeAndSend(registration, publicKey, token);
}

// Called when the user enables push in their profile settings
async function requestAndSubscribePush() {
  try {
    // Native iOS path via Capacitor
    if (window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform()) {
      return await _requestCapacitorPush();
    }

    // Browser/PWA path
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
      if (typeof showToast === 'function') showToast('Push notifications are not supported on this device.', 'error');
      return false;
    }

    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      if (typeof showToast === 'function') showToast('Notification permission denied. Please enable it in your browser settings.', 'error');
      return false;
    }

    const reg = await navigator.serviceWorker.ready;
    const keyRes = await fetch('/push/vapid-public-key');
    if (!keyRes.ok) {
      if (typeof showToast === 'function') showToast('Push notifications unavailable right now.', 'error');
      return false;
    }
    const { publicKey } = await keyRes.json();
    const token = localStorage.getItem('guestReadyToken');
    await _subscribeAndSend(reg, publicKey, token);
    return true;
  } catch (e) {
    console.error('requestAndSubscribePush failed:', e);
    return false;
  }
}

async function _requestCapacitorPush() {
  const Push = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.PushNotifications;
  if (!Push) {
    if (typeof showToast === 'function') showToast('Push notifications are not available.', 'error');
    return false;
  }
  const result = await Push.requestPermissions();
  if (result.receive !== 'granted') {
    if (typeof showToast === 'function') showToast('Notification permission denied. Please enable it in Settings → Guest Ready.', 'error');
    return false;
  }
  // Calling register() fires the 'registration' event, which sends the APNs token to our server
  await Push.register();
  return true;
}

async function _subscribeAndSend(registration, publicKey, token) {
  const existing = await registration.pushManager.getSubscription();
  const subscription = existing || await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: _urlBase64ToUint8Array(publicKey)
  });
  await fetch('/push/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    body: JSON.stringify({ subscription })
  });
}

function _urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = atob(base64);
  return Uint8Array.from([...rawData].map(c => c.charCodeAt(0)));
}
