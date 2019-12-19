var xhr = new XMLHttpRequest()
var nomb = document.getElementById('nb')

function button(){
    xhr.onload = function(){
        nomb.innerHTML = xhr.responseText;
    }
xhr.open ("GET","http://jihane.fr/ajax/nombre.php");
xhr.send ()
}