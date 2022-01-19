var lic = ["", ""]
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
}

function logingo(){
    
    if (document.form.password2.value != contrassenya && document.form.login2.value != usuari){ 
        alert("Sisplau ingresi l'usuari i contrassenya correctament."); 
        return false
        } 
        document.form.submit(); 
    } 