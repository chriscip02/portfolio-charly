document.addEventListener("DOMContentLoaded", function () {
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
            link.addEventListener("click", function () {
                modal.style.display = "none";
            });
        });
    } else {
        console.error("No se encontraron los elementos .hamburger o .modal en video.html");
    }
});