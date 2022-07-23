window.onscroll = () => { show_hide_gototop(), show_hide_header() };







//----------------------HOVER COMMENT----------------------//
$(".comment").hover(function () {
    $(this).css("box-shadow", "0px 4px 16px rgba(0, 0, 0, 0.1)");
    $(this).parent().css("box-shadow", "none");

}, function () {
    if ($(this).parent().hasClass("comment")) {
        $(this).parent().css("box-shadow", "0px 4px 16px rgba(0, 0, 0, 0.1)");
    }
    $(this).css("box-shadow", "none");
}
);


function SendCommentToggle() {
    const emlement = $("#SendComment");
    const display = emlement.css("display");
    if (display === "none") {
        emlement.css("display", "flex");
        emlement.css("opacity", "1");
    }
    else{
        emlement.css("display", "none");
        emlement.css("opacity", "0");
    }
    
    // if(emlement.hasClass("send-comment-con-active")){
    //     emlement.removeClass("send-comment-con-active");
    // }
    // else{
    //     emlement.addClass("send-comment-con-active");
    // }
}