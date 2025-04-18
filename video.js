document.addEventListener("DOMContentLoaded", function () {
    // Aplicar fade-in al cargar la página
    document.body.classList.add("loaded");

    // Lógica para el video player
    const videoPlayer = document.getElementById("video-player");
    const videoUrl = localStorage.getItem("selectedVideo") || "https://player.vimeo.com/video/945985049?h=17706c6615";
    videoPlayer.src = videoUrl;

    // Lógica para el menú hamburguesa
    const hamburger = document.querySelector(".hamburger");
    const modal = document.querySelector(".modal");

    if (hamburger && modal) {
        hamburger.addEventListener("click", function () {
            modal.style.display = "flex";
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
                const href = this.getAttribute("href");
                if (href.startsWith("index.html")) {
                    e.preventDefault();
                    document.body.classList.add("fade-out");
                    setTimeout(() => {
                        window.location.href = href;
                    }, 300); // Esperar 0.3s (duración del fade-out)
                }
            });
        });
    } else {
        console.error("No se encontraron los elementos .hamburger o .modal en video.html");
    }

    // Lógica para los enlaces del menú principal
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href.startsWith("index.html")) {
                e.preventDefault();
                document.body.classList.add("fade-out");
                setTimeout(() => {
                    window.location.href = href;
                }, 300); // Esperar 0.3s (duración del fade-out)
            }
        });
    });

    // Lógica para el enlace del logo
    const logoLink = document.querySelector(".logo-container a");
    if (logoLink) {
        logoLink.addEventListener("click", function (e) {
            e.preventDefault();
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = "index.html#everything";
            }, 300); // Esperar 0.3s
        });
    }

    // Lógica para el botón de flecha atrás
    const backArrow = document.querySelector(".back-arrow");
    if (backArrow) {
        backArrow.addEventListener("click", function (e) {
            e.preventDefault();
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = "index.html#everything";
            }, 300); // Esperar 0.3s
        });
    }
});