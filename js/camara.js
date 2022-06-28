document.getElementById("cameraModal").addEventListener("shown.bs.modal", (evt) => {
    assignVideoSourceCamera(document.querySelector("#CameraContent"),document.querySelector("#modalCameraTitle"));
})

document.getElementById("cameraModal").addEventListener("hide.bs.modal", (evt) => {
    dismissVideoSourceCamera(document.querySelector("#CameraContent"),document.querySelector("#modalCameraTitle"));
})
function assignVideoSourceCamera(videoCamera,ModalTitle) {
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(function (stream) {
                videoCamera.srcObject = stream;
            })
            .catch(function (err0r) {
                ModalTitle.textContent += err0r;
            });
    }
}

function dismissVideoSourceCamera(videoCamera, ModalTitle) {
    videoCamera.srcObject?.getTracks().forEach(track => {
        track.stop();
    });
    ModalTitle.textContent = "Camara ";
}
