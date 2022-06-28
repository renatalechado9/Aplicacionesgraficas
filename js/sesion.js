
// Registrarse

var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var telefono = document.getElementById('telefono');
var pass = document.getElementById('pass');
var pass2 = document.getElementById('pass2');
var error = document.getElementById('pass2');


function enviarFormulario(){
    console.log("Registrándose");

    var mensajeError = [];
    if(nombre.value === null || nombre.value === ''){
        mensajeError.push('Ingresa tu nombre');
    }
    if(email.value === null || email.value === ''){
        mensajeError.push('Ingresa tu correo electronico');
    }
    if(telefono.value === null || telefono.value === ''){
        mensajeError.push('Ingresa tu número de teléfono');
    }
    if(pass.value === null || pass.value === ''){
        mensajeError.push('Ingresa tu contraseña');
    }
    if(pass2.value === null || pass2.value === ''){
        mensajeError.push('Confirma tu contraseña');
    }

    error.innerHTML = mensajeError.join(',');

    return false;
}(jQuery);

/*var form = document.getElementById('registrarse');
form.addEventListener('submit', function(evt){
    evt.preventDefault();
    var mensajeError = [];
});*/

//crear cuenta


$(document).ready(function(){
    
    $(".contenedor-formularios").find("input, textarea").on("keyup blur focus", function (e) {

        var $this = $(this),
          label = $this.prev("label");

        if (e.type === "keyup") {
            if ($this.val() === "") {
                label.removeClass("active highlight");
            } else {
                label.addClass("active highlight");
            }
        } else if (e.type === "blur") {
            if($this.val() === "") {
                label.removeClass("active highlight"); 
                } else {
                label.removeClass("highlight");   
                }   
        } else if (e.type === "focus") {
            if($this.val() === "") {
                label.removeClass("highlight"); 
            } 
            else if($this.val() !== "") {
                label.addClass("highlight");
            }
        }

    });

    $(".tab a").on("click", function (e) {

        e.preventDefault();
$(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");

        target = $(this).attr("href");

        $(".contenido-tab > div").not(target).hide();

        $(target).fadeIn(600);

    });
    
});