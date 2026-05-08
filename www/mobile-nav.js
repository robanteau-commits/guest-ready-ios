function renderMobileNav(options = {}) {
  const { activePage = '' } = options;
  const mount = document.getElementById('mobileNavMount');
  if (!mount) return;

  mount.innerHTML = `
    <div class="mobile-nav">
      <a href="dashboard.html" class="mobile-nav-item ${activePage === 'dashboard' ? 'active' : ''}">
        <span><i class="fa-solid fa-chart-line"></i></span>Dashboard
      </a>

      <a href="messages.html" class="mobile-nav-item ${activePage === 'messages' ? 'active' : ''}">
        <span style="position:relative;">
          <i class="fa-solid fa-comment-dots"></i>
          <span id="mobMsgNavBadge" class="sidebar-badge" style="position:absolute; top:-5px; right:-10px;">0</span>
        </span>
        Messages
      </a>

      <a href="calendar.html" class="mobile-nav-item ${activePage === 'calendar' ? 'active' : ''}">
        <span><i class="fa-solid fa-calendar-days"></i></span>Calendar
      </a>

      <a href="properties.html" class="mobile-nav-item ${activePage === 'properties' ? 'active' : ''}" id="mobNavProps">
        <span><i class="fa-solid fa-house"></i></span>Props
      </a>

      <a href="cleaners.html" class="mobile-nav-item ${activePage === 'cleaners' ? 'active' : ''}" id="mobNavCleaners">
        <span><i class="fa-solid fa-broom"></i></span>Cleaners
      </a>

      <a href="dispatch.html" class="mobile-nav-item ${activePage === 'dispatch' ? 'active' : ''}" id="mobNavDispatch" style="display:none;">
        <span><i class="fa-solid fa-users"></i></span>My Team
      </a>

      <a onclick="openProfileModal()" class="mobile-nav-item">
        <span><i class="fa-solid fa-user"></i></span>Profile
      </a>
    </div>
  `;

  // Role-based nav visibility — must run after innerHTML is set
  try {
    const user = JSON.parse(localStorage.getItem('cleaningUser'));
    if (user && user.role === 'Cleaner') {
      // Hide Host-only links for Cleaner accounts
      const mobNavProps = document.getElementById('mobNavProps');
      const mobNavCleaners = document.getElementById('mobNavCleaners');
      if (mobNavProps) mobNavProps.style.display = 'none';
      if (mobNavCleaners) mobNavCleaners.style.display = 'none';

      // Show My Team for company-type cleaner accounts
      if (user.accountType === 'company') {
        const link = document.getElementById('mobNavDispatch');
        if (link) link.style.display = '';
      }
    }
  } catch (e) {}
}
