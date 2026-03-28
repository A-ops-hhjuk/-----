/* ============================================================
   SAFHA Platform - Shared Components
   ============================================================ */

const SAFHA_NAV = `
<nav class="navbar-custom">
  <div class="navbar-inner">
    <a href="index.html" class="navbar-logo">
      <div class="logo-icon">ص</div>
      <div>
        <div class="logo-text">صف<span>حة</span></div>
        <small class="logo-sub">للدعم النفسي والاستشارات</small>
      </div>
    </a>

    <div class="nav-links">
      <a href="index.html" class="nav-link-item">الرئيسية</a>
      <div class="nav-dropdown">
        <a href="#" class="nav-link-item">الخدمات <i class="fas fa-chevron-down" style="font-size:0.7rem;margin-right:4px;"></i></a>
        <div class="dropdown-menu-custom">
          <a href="consultants.html"><i class="fas fa-user-md"></i> استشارة نفسية فردية</a>
          <a href="assessment.html"><i class="fas fa-brain"></i> التقييم النفسي الذكي</a>
          <a href="consultants.html?type=career"><i class="fas fa-briefcase"></i> استشارات مهنية</a>
          <a href="consultants.html?type=trauma"><i class="fas fa-heart"></i> دعم الصدمات</a>
        </div>
      </div>
      <a href="consultants.html" class="nav-link-item">المستشارون</a>
      <a href="assessment.html" class="nav-link-item">التقييم</a>
      <a href="blog.html" class="nav-link-item">المدونة</a>
      <a href="about.html" class="nav-link-item">من نحن</a>
      <a href="contact.html" class="nav-link-item">تواصل معنا</a>
    </div>

    <div class="nav-actions">
      <a href="auth.html" class="nav-btn-login">تسجيل الدخول</a>
      <a href="auth.html?tab=register" class="nav-btn-register">ابدأ الآن</a>
    </div>

    <button class="nav-toggler" id="navToggler">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- Mobile Nav -->
<div class="mobile-nav" id="mobileNav">
  <div class="mobile-nav-panel">
    <div class="mobile-nav-close" id="mobileNavClose"><i class="fas fa-times"></i></div>
    <a href="index.html" class="navbar-logo" style="margin-bottom:24px;">
      <div class="logo-icon">ص</div>
      <div>
        <div class="logo-text">صف<span>حة</span></div>
        <small class="logo-sub">للدعم النفسي والاستشارات</small>
      </div>
    </a>
    <div class="mobile-nav-links">
      <a href="index.html"><i class="fas fa-home" style="margin-left:8px;color:var(--primary);"></i> الرئيسية</a>
      <a href="consultants.html"><i class="fas fa-user-md" style="margin-left:8px;color:var(--primary);"></i> المستشارون</a>
      <a href="assessment.html"><i class="fas fa-brain" style="margin-left:8px;color:var(--primary);"></i> التقييم النفسي</a>
      <a href="blog.html"><i class="fas fa-newspaper" style="margin-left:8px;color:var(--primary);"></i> المدونة</a>
      <a href="about.html"><i class="fas fa-info-circle" style="margin-left:8px;color:var(--primary);"></i> من نحن</a>
      <a href="contact.html"><i class="fas fa-envelope" style="margin-left:8px;color:var(--primary);"></i> تواصل معنا</a>
    </div>
    <div class="mobile-nav-actions">
      <a href="auth.html" class="btn-outline-custom" style="width:100%;justify-content:center;">تسجيل الدخول</a>
      <a href="auth.html?tab=register" class="btn-primary-custom" style="width:100%;justify-content:center;">ابدأ الآن مجاناً</a>
    </div>
  </div>
</div>
`;

const SAFHA_FOOTER = `
<footer class="footer">
  <div class="container-custom">
    <div class="footer-grid">
      <div>
        <a href="index.html" class="navbar-logo footer-brand" style="margin-bottom:0;">
          <div class="logo-icon">ص</div>
          <div>
            <div class="logo-text">صف<span>حة</span></div>
            <small class="logo-sub">للدعم النفسي والاستشارات</small>
          </div>
        </a>
        <p class="footer-desc">منصة متخصصة لدعم الصحة النفسية والمهنية للعاملين في القطاع الإنساني. بيئة آمنة وموثوقة مع أفضل المستشارين المتخصصين.</p>
        <div class="footer-social">
          <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
          <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-link"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
      <div>
        <h5>الخدمات</h5>
        <ul class="footer-links">
          <li><a href="consultants.html">استشارة نفسية فردية</a></li>
          <li><a href="assessment.html">التقييم النفسي الذكي</a></li>
          <li><a href="consultants.html?type=career">استشارات مهنية</a></li>
          <li><a href="consultants.html?type=trauma">دعم الصدمات</a></li>
          <li><a href="booking.html">حجز موعد</a></li>
        </ul>
      </div>
      <div>
        <h5>الشركة</h5>
        <ul class="footer-links">
          <li><a href="about.html">من نحن</a></li>
          <li><a href="about.html#team">فريق العمل</a></li>
          <li><a href="blog.html">المدونة</a></li>
          <li><a href="contact.html">تواصل معنا</a></li>
          <li><a href="#">للمنظمات والمؤسسات</a></li>
        </ul>
      </div>
      <div>
        <h5>الدعم</h5>
        <ul class="footer-links">
          <li><a href="#">مركز المساعدة</a></li>
          <li><a href="#">الأسئلة الشائعة</a></li>
          <li><a href="#">سياسة الخصوصية</a></li>
          <li><a href="#">شروط الاستخدام</a></li>
          <li><a href="#">الاعتمادات المهنية</a></li>
        </ul>
        <div style="margin-top:20px;">
          <p style="font-size:0.82rem;color:rgba(255,255,255,0.5);margin-bottom:10px;">خط الطوارئ النفسية:</p>
          <a href="tel:+966800000000" style="color:var(--primary-light);font-weight:700;font-size:1rem;">800-000-0000</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} منصة صفحة. جميع الحقوق محفوظة.</p>
      <div class="footer-bottom-links">
        <a href="#">سياسة الخصوصية</a>
        <a href="#">شروط الاستخدام</a>
        <a href="#">اتفاقية الخدمة</a>
      </div>
    </div>
  </div>
</footer>
`;

// Inject components on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Inject Navbar
  const navPlaceholder = document.getElementById('navbar-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = SAFHA_NAV;

  // Inject Footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.innerHTML = SAFHA_FOOTER;
});
