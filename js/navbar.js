document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const sidenav = document.getElementById('mySidenav');
    const sidenavOverlay = document.querySelector('.sidenav-overlay');
    const closeBtn = document.querySelector('.closebtn');
    const logo = document.getElementById('logo-brand');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            logo.src = "https://lippomalls.com/assets/img/brand/logo_black.png";  
        } else {
            navbar.classList.remove('scrolled');
            logo.src = "https://lippomalls.com/assets/img/brand/logo_white.png";  
        }
    });

    menuIcon.addEventListener('click', function () {
        sidenav.style.width = '70%';
        sidenavOverlay.style.opacity = '1';
        sidenavOverlay.style.zIndex = '1040';
        sidenav.classList.add('open');
        sidenavOverlay.classList.add('show');
        document.body.style.overflow = 'hidden'; 
    });

    closeBtn.addEventListener('click', function () {
        closeSidenav();
    });

    sidenavOverlay.addEventListener('click', function () {
        closeSidenav();
    });

    function closeSidenav() {
        sidenav.style.width = '0';
        sidenavOverlay.style.opacity = '0';
        sidenavOverlay.style.zIndex = '-1';
    }

    dropdownToggle.addEventListener('click', function (e) {
        e.preventDefault();
        const dropdownMenu = this.nextElementSibling;
        dropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', function (e) {
        if (!e.target.matches('.dropdown-toggle')) {
            const dropdowns = document.querySelectorAll('.dropdown-menu');
            dropdowns.forEach(dropdown => {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    });
});
