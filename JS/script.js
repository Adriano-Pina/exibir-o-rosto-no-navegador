const videoContainer = document.getElementById("videoContainer");
const videoElement = document.getElementById("videoElement");
const widthRange = document.getElementById("widthRange");
const heightRange = document.getElementById("heightRange");
const shapeSelect = document.getElementById("shapeSelect");

function updateVideoSize() {
    const width = widthRange.value;
    const height = heightRange.value;
    videoContainer.style.width = `${width}px`;
    videoContainer.style.height = `${height}px`;
}

function updateVideoShape() {
    const shape = shapeSelect.value;
    if (shape === "circle") {
        videoContainer.style.borderRadius = "50%";
    } else {
        videoContainer.style.borderRadius = "10px";
    }
}

async function setupCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoElement.srcObject = stream;
    } catch (err) {
        console.error("Error accessing webcam:", err);
    }
}

widthRange.addEventListener("input", updateVideoSize);
heightRange.addEventListener("input", updateVideoSize);
shapeSelect.addEventListener("change", updateVideoShape);

setupCamera();
        updateVideoSize(); // Atualizar o tamanho inicial baseado nos valores iniciais dos controles
        updateVideoShape(); // Atualizar a forma inicial baseada no valor inicial do controle select