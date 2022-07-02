const form = document.getElementById("frm-gestion")

form.addEventListener("submit",(evt)=>{
    evt.preventDefault();
    alert("Se ha enviado su sugerencia o reclamo.");

    form.elements['nombre'].value = '';
    form.elements['cedula'].value = '';
    form.elements['correo'].value = '';
    form.elements['tienda'].value = 'Tienda N/D';
    form.elements['telefono'].value = '';
    form.elements['solicitud'].value = 'Solicitud N/D';
    form.elements['comentario'].value = '';
    
});
