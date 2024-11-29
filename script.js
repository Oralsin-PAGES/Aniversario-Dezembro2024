document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "Parabens.png",
        "Parabens2.jpg",
        "TTP - 01-12.png",
        "Rotativo - 01-12.png",
        "Rotativo - 03-12.png",
        "VLM - 03-12.png",
        "VLM - 08-12.png",
        "VLM - 10-12.png",
        "NRN - 11-12.png",
        "NRN - 12-12.png",
        "VLM - 12-12.png",
        "VLM - 17-12.png",
        "SAM - 18-12.png",
        "VLM - 20-12.png",
        "TTP - 21-12.png",
        "SMP - 25-12.png",
        "MAP - 26-12.png",
        "Rotativo - 28-12.png",
        // Adicione mais imagens aqui
    ];

    let currentIndex = 0;
    const centeredImage = document.querySelector(".centered-image");

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        const imageUrl = images[currentIndex];
        centeredImage.src = imageUrl;
    }

    // Inicializa a troca de imagem a cada 5 segundos
    setInterval(changeImage, 5000);

    // Carrega a primeira imagem
    changeImage();
});
