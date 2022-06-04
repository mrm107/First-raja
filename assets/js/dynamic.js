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

