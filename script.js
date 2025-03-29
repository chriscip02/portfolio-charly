
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

        // Cerrar el modal al hacer clic en un enlace dentro del modal
        const modalLinks = modal.querySelectorAll("a");
        modalLinks.forEach(link => {
            link.addEventListener("click", function () {
                modal.style.display = "none";
            });
        });
    } else {
        console.error("No se encontraron los elementos .hamburger o .modal");
    }
});