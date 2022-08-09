//FONCTION QUI AFFICHE LE NOMBRE DE FOIS QUUN PRODUIT EST SELECTIONNE
const elt = document.getElementsByClassName("addcard");
const nombre =document.getElementById ("zero");      
let nbClick = 0;
elt.forEach(element => {
    
    element.addEventListener( 
        'click',
        function() {
                  
            nbClick = nbClick +1;
            
            nombre.innerHTML =  nbClick;
        }
    );
});
function geeksforgeeks () {
    var x=document.getElementById ("menu1");
    if (x.style.display==="block") {
        x.style.display= "none";
    } else {
        x.style.display="block";
    }
 }
 function myFonction(x) {
    x.classlist.toggle("list");
 }
 