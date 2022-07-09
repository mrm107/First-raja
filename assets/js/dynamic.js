$(".hamburger-menu").click(function (e) {
    if ($("#hamburger").is(':checked')) {
        $(".hamburger-menu").css({
            "transform": "rotateZ(45deg)",
        });
        $(".navbar").animate({
            "left": "0",
            "top": "64px",
        });
    }
    else {
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
        "transform": "rotate(540deg)",
    });
    $(".lang-menu").css({
        "display": "flex",
    });
});

window.onclick = function (event) {
    if (!event.target.matches('#lang-toggle')) {
        $("#lang-toggle i").css({
            "transform": "rotate(0deg)",
        });
        $(".lang-menu").css({
            "display": "none",
        });
    }
}


// let hover = 0;
// $(".banner img").hover(function () {
//     hover++;
// }, function () {
//     if (hover === 10) {
//         $(".banner").text("خوشت اومده ها!!!");
//     }
// }
// );



