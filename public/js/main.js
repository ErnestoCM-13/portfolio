let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 300;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active")
            })
        }
    });
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x")
}

// Menu toggle
document.querySelectorAll(".menu-wrapper").forEach(wrapper => {
    const toggle = wrapper.querySelector(".menu-toggle");
    const menu = wrapper.querySelector(".menu-options");

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        closeAllMenusExcept(wrapper);
        menu.classList.toggle("active");
    })
});

// Close menus when click outside
document.addEventListener('click', () => {
    document.querySelectorAll(".menu-options.active").forEach(menu => {
        menu.classList.remove("active");
    })
});

function closeAllMenusExcept(exception) {
    document.querySelectorAll(".menu-wrapper").forEach(wrapper => {
        if (wrapper !== exception) {
            wrapper.querySelector(".menu-options").classList.remove('active')
        }
    })
}