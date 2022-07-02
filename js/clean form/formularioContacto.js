const form = document.getElementById("contactform")

form.addEventListener("submit",(evt)=>{
    evt.preventDefault();
    alert("Se ha enviado su contacto.");

    form.elements['name'].value = '';
    form.elements['email'].value = '';
    form.elements['phone'].value = '';
    form.elements['website'].value = '';
    form.elements['message'].value = '';
    
});

