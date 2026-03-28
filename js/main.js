/* ============================================================
   SAFHA Platform - Main JavaScript
   ============================================================ */

// === Navbar Mobile Toggle ===
function initMobileNav() {
  const toggler = document.querySelector('.nav-toggler');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileClose = document.querySelector('.mobile-nav-close');
  const overlay = mobileNav;

  if (!toggler || !mobileNav) return;

  toggler.addEventListener('click', () => {
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  const closeNav = () => {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (mobileClose) mobileClose.addEventListener('click', closeNav);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeNav();
  });

  // Close on link click
  document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', closeNav);
  });
}

// === Active nav link ===
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link-item, .mobile-nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href === currentPage) {
      link.classList.add('active');
    }
  });
}

// === Scroll animations ===
function initScrollAnimations() {
  const animElements = document.querySelectorAll('.feature-card, .consultant-card, .testimonial-card, .blog-card, .stat-item');
  
  if (!('IntersectionObserver' in window)) {
    animElements.forEach(el => el.style.opacity = '1');
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// === Counter Animation ===
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(start).toLocaleString('ar');
  }, 16);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-counter'));
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

// === Service Tabs ===
function initServiceTabs() {
  const tabs = document.querySelectorAll('.service-tab');
  const contents = document.querySelectorAll('.service-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const content = document.getElementById(target);
      if (content) content.classList.add('active');
    });
  });
}

// === General Tabs ===
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.tabs-wrapper');
      const target = btn.getAttribute('data-tab');
      if (group) {
        group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        group.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      } else {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      }
      btn.classList.add('active');
      const content = document.getElementById(target);
      if (content) content.classList.add('active');
    });
  });
}

// === Toast Notifications ===
function showToast(message, type = 'success', duration = 3500) {
  const colors = {
    success: { bg: '#E8F5EE', text: '#27AE60', icon: 'fa-check-circle' },
    error: { bg: '#FEF0EE', text: '#E74C3C', icon: 'fa-times-circle' },
    info: { bg: '#E8F4F8', text: '#2E7D93', icon: 'fa-info-circle' },
    warning: { bg: '#FEF9EE', text: '#F39C12', icon: 'fa-exclamation-circle' },
  };
  const c = colors[type] || colors.info;

  // Container
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.style.cssText = 'position:fixed;top:20px;left:50%;transform:translateX(-50%);z-index:9999;display:flex;flex-direction:column;gap:10px;min-width:300px;max-width:420px;';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.style.cssText = `background:${c.bg};color:${c.text};border:1px solid ${c.text}33;padding:14px 18px;border-radius:12px;display:flex;align-items:center;gap:12px;font-family:Cairo,sans-serif;font-size:0.9rem;font-weight:600;box-shadow:0 4px 20px rgba(0,0,0,0.12);animation:slideDown 0.3s ease;direction:rtl;`;
  toast.innerHTML = `<i class="fas ${c.icon}"></i><span style="flex:1">${message}</span><i class="fas fa-times" style="cursor:pointer;opacity:0.6;" onclick="this.closest('[style]').remove()"></i>`;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'fadeOut 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// Toast animations
const toastStyle = document.createElement('style');
toastStyle.textContent = `
@keyframes slideDown { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } }
@keyframes fadeOut { from { opacity:1; } to { opacity:0; } }
`;
document.head.appendChild(toastStyle);

// === Modal Manager ===
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  setTimeout(() => modal.querySelector('.modal-box')?.classList.add('show'), 10);
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.querySelector('.modal-box')?.classList.remove('show');
  setTimeout(() => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }, 300);
}

// Close modal on overlay click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    closeModal(e.target.id);
  }
});

// === Form Validation ===
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return true;
  let valid = true;

  form.querySelectorAll('[required]').forEach(input => {
    const group = input.closest('.form-group');
    if (!input.value.trim()) {
      if (group) group.classList.add('has-error');
      valid = false;
    } else {
      if (group) group.classList.remove('has-error');
    }
  });

  // Email validation
  form.querySelectorAll('[type="email"]').forEach(input => {
    const group = input.closest('.form-group');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (input.value && !emailRegex.test(input.value)) {
      if (group) group.classList.add('has-error');
      valid = false;
    }
  });

  return valid;
}

// === Booking Calendar ===
function initCalendar(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let currentDate = new Date();
  let selectedDate = null;

  function render() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const monthNames = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
    const dayNames = ['أحد','اثنين','ثلاثاء','أربعاء','خميس','جمعة','سبت'];
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    // Available days (mock: weekdays only, future dates)
    const availableDays = [];
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const dow = date.getDay();
      if (date >= today && dow !== 5 && dow !== 6) availableDays.push(d);
    }
    const slotsAvailable = [3,7,10,14,17,21];

    let html = `
      <div class="calendar-header">
        <button class="calendar-nav-btn" id="prevMonth"><i class="fas fa-chevron-right"></i></button>
        <span class="calendar-month">${monthNames[month]} ${year}</span>
        <button class="calendar-nav-btn" id="nextMonth"><i class="fas fa-chevron-left"></i></button>
      </div>
      <div class="calendar-grid">
        ${dayNames.map(d => `<div class="calendar-day-header">${d}</div>`).join('')}
    `;

    // Empty cells
    for (let i = 0; i < firstDay; i++) html += '<div class="calendar-day disabled"></div>';

    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const isToday = date.toDateString() === today.toDateString();
      const isAvailable = availableDays.includes(d);
      const hasSlots = slotsAvailable.includes(d % 10);
      const isSelected = selectedDate && selectedDate.toDateString() === date.toDateString();
      let cls = 'calendar-day';
      if (isToday) cls += ' today';
      if (!isAvailable) cls += ' disabled';
      else cls += ' available';
      if (hasSlots && isAvailable) cls += ' has-slots';
      if (isSelected) cls += ' selected';
      html += `<div class="${cls}" data-day="${d}">${d}</div>`;
    }

    html += '</div>';
    container.innerHTML = html;

    // Events
    container.querySelector('#prevMonth')?.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      render();
    });
    container.querySelector('#nextMonth')?.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      render();
    });
    container.querySelectorAll('.calendar-day.available').forEach(dayEl => {
      dayEl.addEventListener('click', () => {
        const d = parseInt(dayEl.getAttribute('data-day'));
        selectedDate = new Date(year, month, d);
        render();
        // Dispatch event
        container.dispatchEvent(new CustomEvent('dateSelected', { detail: { date: selectedDate } }));
      });
    });
  }

  render();
}

// === Smooth scroll for anchor links ===
document.addEventListener('click', e => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;
  const target = document.querySelector(anchor.getAttribute('href'));
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

// === Init all ===
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  setActiveNavLink();
  initScrollAnimations();
  initCounters();
  initServiceTabs();
  initTabs();
});

// === Expose globals ===
window.showToast = showToast;
window.openModal = openModal;
window.closeModal = closeModal;
window.validateForm = validateForm;
window.initCalendar = initCalendar;
