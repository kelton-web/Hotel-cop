$(document).ready(function()
{
    if(!$(".para-reserve").css("display:block")){

        $(".para-reserve").click(function(){
        $(".reservePara").animate({"width":"50px", "margin-left":"250px"},"slow"); $(".reserve-none").fadeOut(500);  
    });
  }
    $(".para-reserve").dblclick(function(){
        $(".reserve-none").fadeIn(200); 
        $(".reservePara").animate({"width":"300px", "margin-left":"-0px"},"slow");  
    });
     
}); 