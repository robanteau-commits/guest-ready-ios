(function () {
  var AUTH_KEYS = ['cleaningUser', 'guestReadyToken'];

  function prefs() {
    return window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Preferences;
  }

  window.AuthStore = {
    // Restore auth tokens from Capacitor Preferences into localStorage if localStorage was wiped.
    // Call this once at the top of each page's DOMContentLoaded handler before reading auth.
    init: async function () {
      var p = prefs();
      if (!p) return;
      for (var i = 0; i < AUTH_KEYS.length; i++) {
        var key = AUTH_KEYS[i];
        if (!localStorage.getItem(key)) {
          try {
            var result = await p.get({ key: key });
            if (result && result.value) {
              localStorage.setItem(key, result.value);
            }
          } catch (e) {}
        }
      }
    },

    // Save an auth value to localStorage and fire-and-forget to Capacitor Preferences.
    setAuth: function (key, value) {
      localStorage.setItem(key, value);
      var p = prefs();
      if (p) {
        p.set({ key: key, value: String(value) }).catch(function () {});
      }
    },

    // Remove an auth value from localStorage and fire-and-forget remove from Capacitor Preferences.
    removeAuth: function (key) {
      localStorage.removeItem(key);
      var p = prefs();
      if (p) {
        p.remove({ key: key }).catch(function () {});
      }
    }
  };
})();
