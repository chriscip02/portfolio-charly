document.addEventListener("DOMContentLoaded", function () {
    // Lógica para los enlaces de los proyectos
    const projectLinks = document.querySelectorAll(".project-link");

    projectLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const videoUrl = this.getAttribute("data-video");
            localStorage.setItem("selectedVideo", videoUrl);
            window.location.href = "video.html";
        });
    });

    // Lógica para el menú hamburguesa
    const hamburger = document.querySelector(".hamburger");
    const modal = document.querySelector(".modal");

    if (hamburger && modal) {
        hamburger.addEventListener("click", function () {
            modal.style.display = "flex"; // Mostrar el modal
        });

        modal.addEventListener("click", function (e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });

        const modalLinks = modal.querySelectorAll("a");
        modalLinks.forEach(link => {
            link.addEventListener("click", function (e) {
                modal.style.display = "none";

                // Desplazamiento personalizado para "Contact" en móvil
                if (this.getAttribute("href") === "#contact" && window.innerWidth <= 768) {
                    e.preventDefault();
                    const studioInfoSection = document.querySelector(".studio-info");
                    if (studioInfoSection) {
                        const offsetTop = studioInfoSection.getBoundingClientRect().top + window.scrollY - 70; // Ajuste para móvil
                        window.scrollTo({
                            top: offsetTop,
                            behavior: "smooth"
                        });
                    }
                }

                // Desplazamiento personalizado para "Services"
                if (this.getAttribute("href") === "#services") {
                    e.preventDefault();
                    const servicesSection = document.querySelector(".services-section");
                    if (servicesSection) {
                        const offsetTop = servicesSection.getBoundingClientRect().top + window.scrollY - 120;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: "smooth"
                        });
                    }
                }
            });
        });
    } else {
        console.error("No se encontraron los elementos .hamburger o .modal");
    }

    // Manejar el enlace "Contact" en la navegación principal
    const navContactLink = document.querySelector('nav ul li a[href="#contact"]');
    if (navContactLink) {
        navContactLink.addEventListener("click", function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const studioInfoSection = document.querySelector(".studio-info");
                if (studioInfoSection) {
                    const offsetTop = studioInfoSection.getBoundingClientRect().top + window.scrollY - 70; // Ajuste para móvil
                    window.scrollTo({
                        top: offsetTop,
                        behavior: "smooth"
                    });
                }
            } else {
                // En pantallas más grandes, desplazamos a contact-person
                e.preventDefault();
                const contactPerson = document.querySelector(".studio-info");
                if (contactPerson) {
                    const offsetTop = contactPerson.getBoundingClientRect().top + window.scrollY - 120;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: "smooth"
                    });
                }
            }
        });
    }

    // Manejar el enlace "Services" en la navegación principal
    const navServicesLink = document.querySelector('nav ul li a[href="#services"]');
    if (navServicesLink) {
        navServicesLink.addEventListener("click", function (e) {
            e.preventDefault();
            const servicesSection = document.querySelector(".services-section");
            if (servicesSection) {
                const offsetTop = servicesSection.getBoundingClientRect().top + window.scrollY - 120;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    }
});