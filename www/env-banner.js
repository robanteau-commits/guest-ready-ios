(function () {
  const host = window.location.hostname;

  const isStaging =
    host.includes("onrender.com") &&
    (host.includes("-staging") || host.includes("-1"));

  if (!isStaging) return;

  const banner = document.createElement("div");
  banner.innerText = "⚠️ STAGING ENVIRONMENT – TEST DATA ONLY";

  banner.style.position = "fixed";
  banner.style.top = "0";
  banner.style.left = "0";
  banner.style.width = "100%";
  banner.style.background = "#F59E0B";
  banner.style.color = "white";
  banner.style.fontWeight = "800";
  banner.style.textAlign = "center";
  banner.style.padding = "10px";
  banner.style.zIndex = "9999";
  banner.style.letterSpacing = "1px";
  banner.style.fontSize = "14px";

  document.body.style.paddingTop = "50px";
  document.body.prepend(banner);
})();
