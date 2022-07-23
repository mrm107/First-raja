
const body = document.body;
const html = document.documentElement;
const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
// var mainOffsetbot = $(".main")[0].offsetTop + $(".main")[0].offsetHeight;    
const Scroll1 = new Scroll();

function show_hide_gototop() {
    let current = window.pageYOffset;
    if (Scroll1.ScrollDirection() === false && current >= height / 4) {
        $("#gototop").removeClass("gototop_hide");
        $("#gototop").addClass("gototop_show");
    }
    else {
        $("#gototop").removeClass("gototop_show");
        $("#gototop").addClass("gototop_hide");
    }
}
function gototop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}