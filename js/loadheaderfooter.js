 async function loadLayout() {
    try {
      const [navbarRes, footerRes] = await Promise.all([
        fetch('navbar.html'),
        fetch('footer.html')
      ]);

      const [navbarHTML, footerHTML] = await Promise.all([
        navbarRes.text(),
        footerRes.text()
      ]);

      insertAndFade('navbar-container', navbarHTML);
      insertAndFade('footer-container', footerHTML);
    } catch (err) {
      console.error('Error loading layout:', err);
    }
  }

  function insertAndFade(id, html) {
    const el = document.getElementById(id);
    el.innerHTML = html;
    el.classList.add('loaded');
  }

  document.addEventListener('DOMContentLoaded', loadLayout);