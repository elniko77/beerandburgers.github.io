window.onload = iniciar;

function iniciar() {
  document.getElementById('send').addEventListener('click', validate, false);
}

function valida_nombre() {
  var elemento = document.getElementById('form_nombre');
  if (elemento.value == '') {
    alert('Por favor ingrese un nombre.');
    return false;
  }
  return true;
}

function emailIsValid (email) {
    return /\S+@\S+\.\S+/.test(email)
  }


function valida_email() {
    var elemento = document.getElementById('form_email');
    if (elemento.value == '') {
        alert('Por favor ingrese una dirección de email.'); 
        return false;
    }
    else {
        if(emailIsValid(elemento.value)) {
            return true;
        }
        else {
            alert('Por favor ingrese una dirección de correo válida.');
            return false;
        }
    }
}

function valida_comentario() {
    var elemento = document.getElementById('form_comentario');
    if (elemento.value == '') {
      alert('Por favor ingrese un comentario.');
      return false;
    }
    return true;
  }
  

function validate(e) {
    if (valida_nombre() && valida_email() && valida_comentario() && confirm('Pulse aceptar si desea enviar el form')){
  
    return true;
  }
  return false;
}