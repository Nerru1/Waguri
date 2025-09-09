        const hamburger = document.getElementById("hamburger");
        const othbar = document.getElementById("oth-navbar-layout");
        let navbar = document.querySelector(".navbar-layout");

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle("active");
            othbar.classList.toggle("active");
            navbar.classList.toggle("active");
        })