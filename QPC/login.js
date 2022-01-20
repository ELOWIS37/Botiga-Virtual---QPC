var usuari;
var contrassenya;
function registergo(){
    usuari = document.form.login1.value
    contrassenya = document.form.password1.value
    if (usuari == "" || contrassenya == "")
        alert("Has d'ingressar un usuari i contrassenya.")
        else{
            document.form.submit();
        }
        localStorage.setItem('usuari', (usuari))
        localStorage.setItem('contrassenya', (contrassenya))

}

function logingo(){
    
    if (document.form.password2.value != localStorage.getItem('contrassenya') || document.form.login2.value != localStorage.getItem('usuari')){ 
        alert("No es correcte, ingresi l'usuari i contrassenya correctament o ves a registrar-se primer."); 
        return false
        } 
        document.form.submit(); 
    } 


