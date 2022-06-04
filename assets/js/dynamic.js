$(".hamburger-menu").click(function (e) { 
    if($("#hamburger").is(':checked')){
        $(".navbar").animate({
            "left": "0",
        }); 
    }
    else{
        $(".navbar").animate({
            "left": "-500px",
        });
    }
       
});