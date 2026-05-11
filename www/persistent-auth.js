// Backs up auth keys to Capacitor Preferences (native iOS UserDefaults) so they
// survive WKWebView storage purges. Falls back silently on web/staging.

const _AUTH_KEYS = ['cleaningUser', 'guestReadyToken'];

function _prefs() {
    return window.Capacitor &&
           window.Capacitor.Plugins &&
           window.Capacitor.Plugins.Preferences || null;
}

async function persistAuthSave(key, value) {
    const p = _prefs();
    if (!p) return;
    try { await p.set({ key, value }); } catch (e) {}
}

async function persistAuthClear() {
    const p = _prefs();
    if (!p) return;
    for (const key of _AUTH_KEYS) {
        try { await p.remove({ key }); } catch (e) {}
    }
}

async function restoreAuthIfNeeded() {
    const p = _prefs();
    if (!p) return;
    for (const key of _AUTH_KEYS) {
        if (localStorage.getItem(key)) continue;
        try {
            const { value } = await p.get({ key });
            if (value) localStorage.setItem(key, value);
        } catch (e) {}
    }
}
