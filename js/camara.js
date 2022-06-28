function videollamada() {
    var llamada = document.getElementById('llamada');
    /webcam/
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    navigator.getUserMedia({ video: true, audio: true }, function(stream) {
        llamada.srcObject = stream;
        llamada.play();
    }, function(error) {
        console.log(error);
    });
}

function terminarllamada() {
    var llamada = document.getElementById('llamada');
    llamada.srcObject.getTracks().forEach(function(track) {
        track.stop();
    });
}

const openllamada = document.getElementById('openllamada');
const modal_containerllamada = document.getElementById('modal_container_llamada');
const closellamada = document.getElementById('closellamada');

openllamada.addEventListener('click', () => {
    modal_containerllamada.classList.add('show');

});

closellamada.addEventListener('click', () => {
    modal_containerllamada.classList.remove('show');

});