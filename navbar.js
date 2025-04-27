document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const sidenav = document.getElementById('mySidenav');
    const sidenavOverlay = document.querySelector('.sidenav-overlay');
    const closeBtn = document.querySelector('.closebtn');
    const logo = document.getElementById('logo-brand');
    const dropdownToggle = document.querySelector('.dropdown-toggle');

    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            
            item.classList.add('active');
        });
    });
    
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

    menuIcon.addEventListener('click', function () {
        sidenav.classList.add('open');
        sidenavOverlay.classList.add('show');
        document.body.style.overflow = 'hidden'; 
    });

    closeNav.addEventListener('click', function () {
        sidenav.classList.remove('open');
        sidenavOverlay.classList.remove('show');
        document.body.style.overflow = ''; 
    });

    sidenavOverlay.addEventListener('click', function () {
        sidenav.classList.remove('open');
        sidenavOverlay.classList.remove('show');
        document.body.style.overflow = ''; 
    });

    window.addEventListener('load', function () {
        setTimeout(function () {
            document.querySelector('.parking-floating').classList.remove('hidden');
        }, 1000);
    });

    const bannerItems = document.querySelectorAll('.home-banner-item');
    bannerItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
});
