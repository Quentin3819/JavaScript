//todo http://jihane.fr/dwmg2/exodom.pdf 
        
        
        
        //! Exo 1 
// var title = document.getElementById("mon_titre");
// alert(title.innerHTML);

        //! Exo 2 
// var title = document.getElementById("mon_titre");
// title.innerHTML="Gros titre";

        //! Exo 3 
// var para = document.getElementById("mon_paragraphe");
// para.innerHTML="Petit paragraphe des famille";
// alert (para.innerHTML);

        //! Exo 4 avec 2 function
// var t=document.getElementsByClassName("red");
// t.style.color = "red";

// function red(){
//         var t= document.getElementById("mon_titre");
//         t.style.color = "red";
// }

// function green(){
//         var t= document.getElementById("mon_titre");
//         t.style.color = "greenyellow";
// }
        //! Exo 4 avec 1 function 
// function color(){
//         var t= document.getElementById('mon_titre')
//         if (t.className == "red") {
//                 t.className = "green"
//         }
//         else if (t.className == "green"){
//                 t.className = "red";
//         }
// }

                //! Exo 5
// var p = document.getElementById('paragraphe1')
// var v = document.getElementById('paragraphe2')
// var u = document.getElementById('paragraphe3')

// function para1(){
//         p.className = "visible"
//         v.className= "invisible"
//         u.className= "invisible"
// }
// function para2(){
//         p.className = "invisible"
//         v.className= "visible"
//         u.className= "invisible"
// }
// function para3(){
//         p.className = "invisible"
//         v.className= "invisible"
//         u.className= "visible"
// }

                //! Exo 6 en cours de prog 
// var img1= document.getElementById("image1")
// var img2= document.getElementById("image2")
// var img3= document.getElementById("image3")
// var b1= document.getElementById("bouton1")
// var b2= document.getElementById("bouton2")
// var b3= document.getElementById("bouton3")

// function img2(){
//         img1.className = "visible"
//         img2.className = "invisible"
//         img3.className = "invisible"
//         b1.className ="visible"
//         b2.className ="invisible"
//         b3.className ="invisible"
// }

// function img3(){
//         img1.className = "invisible"
//         img2.className = "visible"
//         img3.className = "invisible"
//         b1.className ="invisible"
//         b2.className ="visible"
//         b3.className ="invisible"
// }

// function img1(){
//         img1.className = "invisible"
//         img2.className = "invisible"
//         img3.className = "visible"
//         b1.className ="invisible"
//         b2.className ="invisible"
//         b3.className ="visible"
// }

                //! Exo 7 

// var t = document.body
// var titre = document.createElement("h1")
// var para = document.createElement("p")
// titre.innerHTML = "Salut tout le monde"
// para.innerHTML = "Comment allez vous ? "

// t.prepend(titre)
// t.append(para)

                //! Exo 8 
// var a = document.getElementById("suppr1")
// var b = document.getElementById("suppr2")
// var c = document.getElementById("suppr3")
// var d = document.getElementById("suppr4")

// function phrase1() {
//         a.remove()
// }
// function phrase2() {
//         b.remove()
// }
// function phrase3() {
//         c.remove()
// }
// function phrase4() {
//         d.remove()
// }
                // ! Exo 9
// var e = document.getElementById("para")
// var text = document.body

// function buttona() {
//         var para = document.createElement("p")
//         para.innerHTML = "Je suis le petit nouveaux de avant "
//         text.insertBefore(para, e)
// }

// function buttonb() {
//         var para = document.createElement("p")
//         para.innerHTML = "Je suis le petit nouveaux de apres"
//         text.append(para)
// }

                //! Exo 10
// var h = document.getElementById("change")
// var titre = document.createElement("h1")
// titre.innerHTML = "Nouveau titre en h1"

// function cli() {
//         document.body.replaceChild(titre,h)
// }