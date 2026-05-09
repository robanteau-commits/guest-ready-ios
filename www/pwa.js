(function () {
  if (!('serviceWorker' in navigator)) return;

  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('/sw.js');
      console.log('Service worker registered');

      // Re-register push subscription silently if permission already granted
      if ('PushManager' in window && Notification.permission === 'granted') {
        const token = localStorage.getItem('guestReadyToken');
        if (token) {
          _setupPushSubscription(reg, token).catch(() => {});
        }
      }
    } catch (err) {
      console.error('Service worker registration failed:', err);
    }
  });
})();

async function _setupPushSubscription(registration, token) {
  const keyRes = await fetch('/push/vapid-public-key');
  if (!keyRes.ok) return;
  const { publicKey } = await keyRes.json();
  if (!publicKey) return;
  await _subscribeAndSend(registration, publicKey, token);
}

// Called when user enables push in profile settings
async function requestAndSubscribePush() {
  try {
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
