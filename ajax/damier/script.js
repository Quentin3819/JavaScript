var xhr = new XMLHttpRequest()
var nomb = document.getElementById('nb')
function button(){
    document.getElementById('nb').innerHTML= ""
    xhr.onload = function(){
        for (var i = 0; i < xhr.responseText; i++) { 
            var f = document.createElement("div")                                                   
            f.setAttribute("onclick","color(\"id"+i+"\")") 
            f.setAttribute("id","id"+i)
            nomb.appendChild(f)
                if (i%2 == 0) {
                    f.classList.add('rouge')
                }else{
                    f.classList.add('noir')
                }
                            
                }
        }
xhr.open ("GET","http://jihane.fr/ajax/nombre.php");
xhr.send ()
}

function color(i){
    var g = document.getElementById(i);
    g.style.backgroundColor="blue";
}