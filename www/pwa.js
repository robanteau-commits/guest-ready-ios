(function () {
  if (!('serviceWorker' in navigator)) return;

  window.addEventListener('load', async () => {
    try {
      await navigator.serviceWorker.register('/sw.js');
      console.log('Service worker registered');
    } catch (err) {
      console.error('Service worker registration failed:', err);
    }
  });
})();
