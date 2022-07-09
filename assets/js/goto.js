class Scroll {
    constructor() {
        this.last_pos = 0;
    }
    ScrollDirection() {
        let current = window.pageYOffset;
        if (current > this.last_pos) {
            this.last_pos = current;
            return true;
        }
        if (current < this.last_pos) {
            this.last_pos = current;
            return false;
        }
    }
}
///////////////////////////////




window.onscroll = () => { show_hide_gototop(), show_hide_header() };


let header = $(".top-header-container");
let lastpos = 0;
let Scroll2 = new Scroll();
function show_hide_header() {
    let current = window.pageYOffset;
    if (current > 64 && Scroll2.ScrollDirection() === false) {
        Stick(1);
    } else if (current > 64) {
        Stick(0);
    }
    else if(current <= 64){
        Stick(2);
    }
}


function Stick(type) {
    if (type === 1) {
        $(header).removeClass("unsticky");
        $(header).addClass("sticky");
    } else if((type === 0)){
        $(header).removeClass("sticky");
        $(header).addClass("unsticky");
    }
    else{
        $(header).removeClass("unsticky");
        $(header).removeClass("sticky");
    }
}





var body = document.body;
var html = document.documentElement;
var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
// var mainOffsetbot = $(".main")[0].offsetTop + $(".main")[0].offsetHeight;    
let Scroll1 = new Scroll();

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