        const hamburger = document.getElementById("hamburger");
        const othbar = document.getElementById("oth-navbar-layout");
        let navbar = document.querySelector(".navbar-layout");
        
        window.addEventListener("scroll", function () {
            if (window.scrollY > 1) {
                navbar.classList.add("scrolled");
                othbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
                othbar.classList.remove("scrolled");
            }
        })

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle("active");
            othbar.classList.toggle("active");
            navbar.classList.toggle("active");
        })