document.addEventListener("DOMContentLoaded", function () {
    // Aplicar fade-in al cargar la página
    document.body.classList.add("loaded");

    // Lógica para los enlaces de los proyectos
    const projectLinks = document.querySelectorAll(".project-link");

    projectLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const videoUrl = this.getAttribute("data-video");
            localStorage.setItem("selectedVideo", videoUrl);
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = "video.html";
            }, 300); // Esperar 0.3s
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

                // Desplazamiento personalizado para "Contact" en móvil/tablet
                if (this.getAttribute("href") === "#contact") {
                    e.preventDefault();
                    const studioInfoSection = document.querySelector(".studio-info");
                    if (studioInfoSection) {
                        let offset;
                        if (window.innerWidth <= 768) {
                            offset = 70; // Móvil
                        } else if (window.innerWidth <= 1440) {
                            offset = 90; // Notebooks
                        } else {
                            offset = 120; // Escritorio
                        }
                        const offsetTop = studioInfoSection.getBoundingClientRect().top + window.scrollY - offset;
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
                        let offset;
                        if (window.innerWidth <= 768) {
                            offset = 70; // Móvil
                        } else if (window.innerWidth <= 1440) {
                            offset = 90; // Notebooks
                        } else {
                            offset = 120; // Escritorio
                        }
                        const offsetTop = servicesSection.getBoundingClientRect().top + window.scrollY - offset;
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
                    const offsetTop = studioInfoSection.getBoundingClientRect().top + window.scrollY - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: "smooth"
                    });
                }
            } else {
                e.preventDefault();
                const contactPerson = document.querySelector(".contact-person");
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

    // Manejar ancla en la URL al cargar la página
    const hash = window.location.hash;
    if (hash === "#services" || hash === "#contact") {
        setTimeout(() => {
            const section = document.querySelector(hash);
            if (section) {
                let offset;
                if (hash === "#contact" && window.innerWidth <= 768) {
                    offset = 70; // Móvil
                } else if (window.innerWidth <= 1440) {
                    offset = 90; // Notebooks
                } else {
                    offset = 120; // Escritorio
                }
                const offsetTop = section.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        }, 100);
    }
});