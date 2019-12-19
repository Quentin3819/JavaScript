var xhr = new XMLHttpRequest()
var nomb = document.getElementById('nb')
var suite =document.getElementById('para')

function button(){
    suite.innerHTML= ""
    xhr.onload = function(){
        nomb.innerHTML = xhr.responseText;
            for (var i = 0; i < xhr.responseText; i++) {
                    suite.innerHTML += i+" "
            }
    }
xhr.open ("GET","http://jihane.fr/ajax/nombre.php");
xhr.send ()
}