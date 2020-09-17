/* Mon slider  */
$(document).ready(function(){
    $('.your-class').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });
 

  /* Fin de mon slider */

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

    /* Faire apparaitre les icones partager en haut de page */
    $('#toggle-fading').click(function(){
        $('.mesIcones').fadeToggle('slow');
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
});

