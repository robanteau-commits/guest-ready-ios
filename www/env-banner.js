(function () {
  // Capacitor fetch patch — prepend production API base to relative URLs so
  // the bundled (offline) app can still reach the server when online.
  if (window.location.protocol === 'capacitor:' || window.location.protocol === 'ionic:') {
    const API_BASE = 'https://www.guestreadyapp.com';
    const _origFetch = window.fetch.bind(window);
    window.fetch = function (url, options) {
      if (typeof url === 'string' && url.startsWith('/')) {
        url = API_BASE + url;
      }
      return _origFetch(url, options);
    };
  }

  const host = window.location.hostname;

  // Staging environment banner
  const isStaging =
    host.includes("onrender.com") &&
    (host.includes("-staging") || host.includes("-1"));

  if (isStaging) {
    const banner = document.createElement("div");
    banner.innerText = "⚠️ STAGING ENVIRONMENT – TEST DATA ONLY";
    banner.style.cssText = "position:fixed;top:0;left:0;width:100%;background:#F59E0B;color:white;font-weight:800;text-align:center;padding:10px;z-index:9999;letter-spacing:1px;font-size:14px;";
    document.body.style.paddingTop = "50px";
    document.body.prepend(banner);
  }

  // Admin proxy banner — shown on every page when proxying as another user
  try {
    const adminUser = localStorage.getItem('adminUser');
    const proxiedUser = localStorage.getItem('cleaningUser');
    if (!adminUser || !proxiedUser) return;

    const admin = JSON.parse(adminUser);
    const proxied = JSON.parse(proxiedUser);
    if (!admin || !proxied || admin.id === proxied.id) return;

    const bar = document.createElement("div");
    bar.id = "adminProxyBanner";
    bar.style.cssText = "position:fixed;top:0;left:0;width:100%;background:#7C3AED;color:white;font-weight:700;display:flex;align-items:center;justify-content:center;gap:16px;padding:10px 16px;z-index:9999;font-size:14px;box-shadow:0 2px 8px rgba(0,0,0,0.2);";
    bar.innerHTML = `
      <span>👤 Proxying as <strong>${proxied.firstName} ${proxied.lastName}</strong> (${proxied.role})</span>
      <button onclick="exitAdminProxy()" style="background:white;color:#7C3AED;border:none;border-radius:6px;padding:6px 14px;font-weight:700;cursor:pointer;font-size:13px;">Exit Proxy</button>
    `;
    document.body.style.paddingTop = (parseInt(document.body.style.paddingTop) || 0) + 52 + "px";
    document.body.prepend(bar);
  } catch (e) {}
})();

function exitAdminProxy() {
  const adminUser  = localStorage.getItem('adminUser');
  const adminToken = localStorage.getItem('adminToken');
  if (!adminUser || !adminToken) return;
  localStorage.setItem('cleaningUser', adminUser);
  localStorage.setItem('guestReadyToken', adminToken);
  localStorage.removeItem('adminUser');
  localStorage.removeItem('adminToken');
  window.location.href = 'dashboard.html';
}
