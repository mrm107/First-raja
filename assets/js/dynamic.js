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
            "top": "-1000px",

        });
    }
       
});



$("#lang-toggle").click(function (e) { 
    $("#lang-toggle i").css({
        "transform" : "rotate(540deg)",
    });
    $(".lang-menu").css({
        "display": "flex",
    });
});

window.onclick = function(event) {
    if (!event.target.matches('#lang-toggle')) {
        $("#lang-toggle i").css({
            "transform" : "rotate(0deg)",
        });
        $(".lang-menu").css({
            "display": "none",
        });
    }
  }



window.onscroll = ()=> {test()};
let header = $(".top-header-container");
let lastpos = 0;
function test(){
    let current=window.pageYOffset;
    if (current > 64 && lastpos===0){
        lastpos=1;
        Stick(1);
    }
    if(current < 64 && lastpos===1){
        lastpos=0;
        Stick(0);
    }
}


function Stick(e) {
    console.log("first");
  if (e===1) {
      $(header).addClass("sticky");
  } else {
      $(header).removeClass("sticky");
  }
}



