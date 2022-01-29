
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

//add event de fade in and fade out for the image

const fadeIn = document.querySelectorAll('.fade-in');

const eventScrollView = () => {
    window.addEventListener('scroll', () => {
        fadeIn.forEach(fade => {
            // fade.classList.add('fade-in-active');

            if(window.scrollY > fade.offsetTop - window.innerHeight * 0.75) {
                fade.classList.add('fade-in-active');
            } else {
                fade.classList.remove('fade-in-active');
            }
        })
    })
}

eventScrollView()