
//event scroll for add background color to navbar
const navbar = document.querySelector('.navbar');
const handleNavbar = () => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    })
}

handleNavbar()