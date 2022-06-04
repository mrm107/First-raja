$(".hamburger-menu").click(function (e) { 
    if($("#hamburger").is(':checked')){
        $(".hamburger-menu").css({
            "transform": "rotateZ(45deg)",            
        });
        $(".navbar").animate({
            "left": "0",
            "top": "64px",
        }); 
    }
    else{
        $(".hamburger-menu").css({
            "transform": "rotateZ(0deg)",            
        });
        $(".navbar").animate({
            // "left": "-500px",
            "top": "-1000px",

        });
    }
       
});