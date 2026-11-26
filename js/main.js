/**
 * Portfolio — Ernesto Cuapantecatl
 *
 * 1. Scrollspy: highlights the visible section in the menu.
 * 2. Accessible drop-down menus (for mobile navigation and language selection).
 * 3. Footer year always up to date.
 */

(() => {
    "use strict";

    /* ----------------------------------------------------------------------
       1. Scrollspy with IntersectionObserver
       ----------------------------------------------------------------------
    */

    const navLinks = document.querySelectorAll(".navbar a[href^='#']");

    const linkBySectionId = new Map();

    navLinks.forEach((link) => {
        const id = link.getAttribute("href").slice(1);
        if (id) linkBySectionId.set(id, link);
    });

    const sections = [...linkBySectionId.keys()]
        .map((id) => document.getElementById(id))
        .filter(Boolean);

    function setActiveSection(id) {
        linkBySectionId.forEach((link, sectionId) => {
            const isActive = sectionId === id;
            link.classList.toggle("active", isActive);
            if (isActive) {
                link.setAttribute("aria-current", "true");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    if (sections.length && "IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));
    }

    /* ----------------------------------------------------------------------
       2. Drop-down menus
       ----------------------------------------------------------------------
    */

    const menuWrappers = [...document.querySelectorAll(".menu-wrapper")];

    function closeMenu(wrapper) {
        const toggle = wrapper.querySelector(".menu-toggle");
        const menu = wrapper.querySelector(".menu-options");
        if (!toggle || !menu) return;

        menu.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
    }

    function closeAllMenus(except) {
        menuWrappers.forEach((wrapper) => {
            if (wrapper !== except) closeMenu(wrapper);
        });
    }

    menuWrappers.forEach((wrapper) => {
        const toggle = wrapper.querySelector(".menu-toggle");
        const menu = wrapper.querySelector(".menu-options");
        if (!toggle || !menu) return;

        toggle.setAttribute("aria-expanded", "false");

        toggle.addEventListener("click", (event) => {
            event.stopPropagation();

            const willOpen = !menu.classList.contains("active");
            closeAllMenus(wrapper);
            menu.classList.toggle("active", willOpen);
            toggle.setAttribute("aria-expanded", String(willOpen));
        });

        menu.addEventListener("click", (event) => {
            if (event.target.closest("a")) closeMenu(wrapper);
        });
    });

    document.addEventListener("click", () => closeAllMenus(null));

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;

        menuWrappers.forEach((wrapper) => {
            const menu = wrapper.querySelector(".menu-options");
            if (menu && menu.classList.contains("active")) {
                closeMenu(wrapper);
                wrapper.querySelector(".menu-toggle").focus();
            }
        });
    });

    /* ----------------------------------------------------------------------
       3. Footer year
       ----------------------------------------------------------------------
    */

    const yearSlot = document.querySelector("[data-current-year]");
    if (yearSlot) yearSlot.textContent = String(new Date().getFullYear());
})();
