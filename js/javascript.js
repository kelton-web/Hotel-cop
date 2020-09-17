

    var chambre = document.querySelector('.diner').addEventListener('click', function(){
            var display = document.querySelector('.dining');
            
            if (display.style.display === "block") {
            display.style.display = "none";
            } else {
            display.style.display = "block";
            }

            var spa = document.querySelector('.spa');
            var chambre = document.querySelector('.chambre');
            if(chambre.style.display === "block"){
                chambre.style.display="none";
            }else if(spa.style.display === "block"){
                spa.style.display="none";
            }
    });
    var chambre = document.querySelector('.chamb').addEventListener('click', function(){
            var display = document.querySelector('.chambre');
            
            if (display.style.display === "block") {
            display.style.display = "none";
            } else {
            display.style.display = "block";
            }

            var dining = document.querySelector('.dining');
            var spa = document.querySelector('.spa');
            if(dining.style.display === "block"){
                dining.style.display="none";
            }else if(spa.style.display === "block"){
                spa.style.display="none";
            }
                
            
    });
    var chambre = document.querySelector('.spaning').addEventListener('click', function(){
            var display = document.querySelector('.spa');
            
            if (display.style.display === "block") {
            display.style.display = "none";
            } else {
            display.style.display = "block";
            }

            var dining = document.querySelector('.dining');
            var chambre = document.querySelector('.chambre');
            if(dining.style.display === "block"){
                dining.style.display="none";
            }else if(chambre.style.display === "block"){
                chambre.style.display="none";
            }
    });
 
/* Click de mon menu burger on affiche le sous menu mobile */

var burger = document.getElementById("burger").addEventListener('click', function(){

    var sousMenuMobile = document.getElementById("sous-menu-mobile");

    if(sousMenuMobile.style.display === "block"){
        sousMenuMobile.style.display="none";
    }else{
        sousMenuMobile.style.display="block";
    }
    
});
        /* Au clic de la croix le sous menu mobile  */
var croix = document.getElementsByClassName('croix')[0].addEventListener("click", function(){
        console.log(croix);
        
    var croixMenu = document.getElementById("sous-menu-mobile");

    if(croixMenu.style.display === "block"){
        croixMenu.style.display = "none"
    }
});




            $(".navListe a").click(function(){

            var sousMenu = document.getElementsByClassName("menu-none")[0];
            var sousChambre = document.getElementsByClassName("menu-none")[1];
            var sousSpa = document.getElementsByClassName("menu-none")[2];
            console.log(sousMenu);
            if(sousMenu.style.display === "block" || sousChambre.style.display === "block" || sousSpa.style.display === "block" ){

                 $(".mon-ul-navbar").css("background","white")/* background change */

                $(".mon-ul-navbar img").attr('src','img/logo-fond.png'); /* Mon logo change */
                /* Mes element couleur et border-bottom */
                var couleur = $(".mon-ul-navbar");
                $('.navListe a').css({"color": "rgb(36, 36, 36)","border-bottom-color":"#AC9563"})
                $(".search i").css("color", "rgb(36, 36, 36)")
                $(".search input").css("color", "rgb(36, 36, 36)")
                $(".mon-ul-navbar").css("border-bottom-color", "#AC9563")
            }else{
                $(".mon-ul-navbar").css("background","rgba(151, 151, 151, 0.4)")/* background change */

                $(".mon-ul-navbar img").attr('src','img/logo-blanc.png'); /* Mon logo change */
                /* Mes element couleur et border-bottom */
                var couleur = $(".mon-ul-navbar");
                $('.navListe a').css({"color": "#F6F5F3","border-bottom-color":"#F6F5F3"})
                $(".search i").css("color", "#F6F5F3")
                $(".search input").css("color", "#F6F5F3")
                $(".mon-ul-navbar").css("border-bottom-color", "rgba(255, 255, 255, 0.4)")
            }
            

  });
  
  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

 
  