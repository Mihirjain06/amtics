  function showSemester(num) {
      document.querySelectorAll('.card').forEach(card => card.classList.remove('active'));
      document.querySelector(`#semester-${num}`).classList.add('active');
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-btn')[num - 1].classList.add('active');
    }

 // Handle nested dropdowns for click functionality on both desktop and mobile
        document.addEventListener('DOMContentLoaded', function() {
            // Handle nested dropdowns (dropdown-submenu)
            const subDropdowns = document.querySelectorAll('.dropdown-submenu .dropdown-toggle');
            
            subDropdowns.forEach(function(toggle) {
                toggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const parent = this.parentElement;
                    const subMenu = parent.querySelector('.dropdown-menu');
                    const isShowing = subMenu.classList.contains('show');
                    
                    // Close all other submenus at the same level
                    parent.parentElement.querySelectorAll('.dropdown-submenu .dropdown-menu.show').forEach(function(openMenu) {
                        if (openMenu !== subMenu) {
                            openMenu.classList.remove('show');
                        }
                    });
                    
                    // Toggle the current submenu
                    subMenu.classList.toggle('show');
                });
            });

            // Close submenus when clicking outside
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.dropdown, .dropdown-submenu')) {
                    document.querySelectorAll('.dropdown-menu.show').forEach(function(menu) {
                        menu.classList.remove('show');
                    });
                }
            });
        
            // Ensure Bootstrap handles main dropdowns correctly
            const mainDropdowns = document.querySelectorAll('.nav-item.dropdown .dropdown-toggle');
            mainDropdowns.forEach(function (toggle) {
                toggle.addEventListener('click', function (e) {
                    const parent = this.parentElement;
                    const menu = parent.querySelector('.dropdown-menu');
                    const isShowing = menu.classList.contains('show');

                    // Close other main dropdowns
                    document.querySelectorAll('.nav-item.dropdown .dropdown-menu.show').forEach(function (openMenu) {
                        if (openMenu !== menu) {
                            openMenu.classList.remove('show');
                        }
                    });

                    // Toggle current main dropdown
                    menu.classList.toggle('show', !isShowing);
                });
            });
        });
   