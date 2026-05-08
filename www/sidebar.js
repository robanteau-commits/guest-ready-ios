function renderSidebar(options = {}) {
  const {
    activePage = '',
    versionTag = ''
  } = options;

  const mount = document.getElementById('sidebarMount');
  if (!mount) return;

  mount.innerHTML = `
    <div class="app-sidebar">
      <div class="brand">
        <div class="brand-main">
          <div class="brand-title-wrap">
            <i class="fas fa-sync-alt"></i>
            <span class="brand-name">Guest Ready</span>
          </div>
          <span class="pro-badge">PRO</span>
        </div>
        <div class="tagline">Cleaners and Hosts, In Sync</div>
      </div>

      <div class="nav-links">
        <a href="dashboard.html" class="nav-item ${activePage === 'dashboard' ? 'active' : ''}">
          <i class="fa-solid fa-chart-line"></i> Dashboard
        </a>

        <a href="messages.html" class="nav-item ${activePage === 'messages' ? 'active' : ''}" style="display:flex; justify-content:space-between; align-items:center;">
          <span><i class="fa-solid fa-comment-dots"></i> Messages</span>
          <span id="msgNavBadge" class="sidebar-badge">0</span>
        </a>

        <a href="calendar.html" class="nav-item ${activePage === 'calendar' ? 'active' : ''}">
          <i class="fa-solid fa-calendar-days"></i> Calendar
        </a>

        <a href="properties.html" class="nav-item ${activePage === 'properties' ? 'active' : ''}" id="navProps">
          <i class="fa-solid fa-house"></i> Properties
        </a>

        <a href="cleaners.html" class="nav-item ${activePage === 'cleaners' ? 'active' : ''}" id="navCleaners">
          <i class="fa-solid fa-broom"></i> Cleaners
        </a>

        <a href="dispatch.html" class="nav-item ${activePage === 'dispatch' ? 'active' : ''}" id="navDispatch" style="display:none;">
          <i class="fa-solid fa-users"></i> My Team
        </a>

        <a href="ai.html" class="nav-item ${activePage === 'ai' ? 'active' : ''}">
          <i class="fa-solid fa-robot"></i> Ask Alf
        </a>
      </div>

      <div style="padding: 16px 10px 0; border-top: 1px solid var(--border-color); display: flex; flex-direction: column; gap: 10px; margin-top:auto;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div
            id="sidebarMyAvatar"
            onclick="openProfileModal()"
            title="Open Profile"
            style="width: 42px; height: 42px; border-radius: 50%; background: var(--secondary-navy); color: white; display: flex; justify-content: center; align-items: center; font-weight: bold; font-size: 16px; overflow: hidden; flex-shrink: 0; cursor: pointer; box-shadow: 0 2px 8px rgba(31,41,55,0.16);"
          ></div>

          <div class="user-profile">
            <span id="userWelcome" class="user-name">...</span>
            <div style="display:flex; flex-direction:column; gap:4px;">
              <a
                class="action-link"
                href="#"
                onclick="openSupportFeedbackDialog(event)"
                style="font-size:12px;"
              >Support/Feedback</a>
            </div>
          </div>
        </div>
        <div class="version-tag">${versionTag}</div>
      </div>
    </div>
  `;

  // Role-based nav visibility — must run after innerHTML is set
  try {
    const user = JSON.parse(localStorage.getItem('cleaningUser'));
    if (user && user.role === 'Cleaner') {
      // Hide Host-only links for Cleaner accounts
      const navProps = document.getElementById('navProps');
      const navCleaners = document.getElementById('navCleaners');
      if (navProps) navProps.style.display = 'none';
      if (navCleaners) navCleaners.style.display = 'none';

      // Show My Team for company-type cleaner accounts
      if (user.accountType === 'company') {
        const link = document.getElementById('navDispatch');
        if (link) link.style.display = '';
      }
    }
  } catch (e) {}
}

function openSupportFeedbackDialog(event) {
  if (event) event.preventDefault();
  ensureSupportFeedbackModal();
  const modal = document.getElementById('supportFeedbackModal');
  if (modal) modal.style.display = 'flex';
}

function closeSupportFeedbackDialog() {
  const modal = document.getElementById('supportFeedbackModal');
  if (modal) modal.style.display = 'none';
}

function ensureSupportFeedbackModal() {
  if (!document.getElementById('supportFeedbackModalStyles')) {
    const style = document.createElement('style');
    style.id = 'supportFeedbackModalStyles';
    style.textContent = `
      .support-modal-overlay {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(31, 41, 55, 0.5);
        backdrop-filter: blur(2px);
        justify-content: center;
        align-items: center;
        z-index: 5000;
        padding: 20px;
        box-sizing: border-box;
      }
      .support-modal-card {
        width: 100%;
        max-width: 460px;
        background: #fff;
        border-radius: 16px;
        box-shadow: 0 16px 40px rgba(15, 23, 42, 0.18);
        overflow: hidden;
      }
      .support-modal-content {
        padding: 24px 24px 16px;
      }
      .support-modal-title {
        margin: 0;
        color: #1f2937;
        font-size: 20px;
        font-weight: 700;
      }
      .support-modal-body {
        margin: 12px 0 0;
        color: #6b7280;
        font-size: 15px;
        line-height: 1.5;
      }
      .support-modal-body a {
        color: #2D8B73;
        font-weight: 600;
        text-decoration: none;
      }
      .support-modal-actions {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        padding: 14px 24px 20px;
        background: #fafafa;
        border-top: 1px solid #eef2f7;
      }
      .support-modal-btn {
        border: none;
        border-radius: 10px;
        padding: 10px 16px;
        font-weight: 600;
        cursor: pointer;
        font-size: 14px;
      }
      .support-modal-btn.primary {
        background: #2D8B73;
        color: #fff;
      }
      .support-modal-btn.secondary {
        background: #e5e7eb;
        color: #1f2937;
      }
    `;
    document.head.appendChild(style);
  }

  if (document.getElementById('supportFeedbackModal')) return;

  const overlay = document.createElement('div');
  overlay.id = 'supportFeedbackModal';
  overlay.className = 'support-modal-overlay';
  overlay.innerHTML = `
    <div class="support-modal-card" role="dialog" aria-modal="true" aria-labelledby="supportFeedbackTitle">
      <div class="support-modal-content">
        <h3 id="supportFeedbackTitle" class="support-modal-title">Support &amp; Feedback</h3>
        <p class="support-modal-body">
          Please email <a href="mailto:support@guestreadypro.com">support@guestreadypro.com</a> for support assistance or to share feedback.
        </p>
      </div>
      <div class="support-modal-actions">
        <button type="button" class="support-modal-btn secondary" onclick="closeSupportFeedbackDialog()">Close</button>
        <a href="mailto:support@guestreadypro.com" class="support-modal-btn primary" style="text-decoration:none; display:inline-flex; align-items:center;">Email Support</a>
      </div>
    </div>
  `;

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeSupportFeedbackDialog();
  });

  document.body.appendChild(overlay);
}
