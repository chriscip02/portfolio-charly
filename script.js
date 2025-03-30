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

        // Cerrar el modal al hacer clic fuera de los enlaces
        modal.addEventListener("click", function (e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });

        // Cerrar el modal y manejar desplazamiento personalizado para "Contact"
        const modalLinks = modal.querySelectorAll("a");
        modalLinks.forEach(link => {
            link.addEventListener("click", function (e) {
                modal.style.display = "none";

                // Si el enlace es "Contact", desplazamiento personalizado en móvil/tablet
                if (this.getAttribute("href") === "#contact" && window.innerWidth <= 1024) {
                    e.preventDefault(); // Prevenir el comportamiento por defecto
                    const contactPerson = document.querySelector(".contact-person");
                    if (contactPerson) {
                        const offsetTop = contactPerson.getBoundingClientRect().top + window.scrollY - 80; // Ajuste por header
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

    // Manejar el enlace "Contact" en la navegación principal (si sigue visible en tablet)
    const navContactLink = document.querySelector('nav ul li a[href="#contact"]');
    if (navContactLink) {
        navContactLink.addEventListener("click", function (e) {
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                const contactPerson = document.querySelector(".contact-person");
                if (contactPerson) {
                    const offsetTop = contactPerson.getBoundingClientRect().top + window.scrollY - 80; // Ajuste por header
                    window.scrollTo({
                        top: offsetTop,
                        behavior: "smooth"
                    });
                }
            }
        });
    }
});