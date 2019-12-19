// var xhr = new XMLHttpRequest()
// var liste = document.getElementById('li')

// function button(){
//     xhr.onload = function(){
//        liste.innerHTML = xhr.responseText
//     }
// xhr.open ("GET","http://jihane.fr/ajax/pays.php")
// xhr.send ()
// }

function button(){
    var xhr = new XMLHttpRequest();

    xhr.onload = function(){
        var pays = document.createElement("li");
        pays.innerText=xhr.responseText;
        var parent =  document.getElementById('cible');
        parent.insertBefore(pays, parent.firstChild);
    };
    xhr.open('GET','random.php')
    xhr.send()
}

