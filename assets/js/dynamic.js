$(".hamburger-menu").click(function (e) { 
    if($("#hamburger").is(':checked')){
        $(".navbar").animate({
            "top": "64px",
        }); 
    }
    else{
        $(".navbar").animate({
            "top": "-1000px",
        });
    }
       
});