const header = $(".header");
const lastpos = 0;
const Scroll2 = new Scroll();
function show_hide_header() {
    let current = window.pageYOffset;
    if (current > 64 && Scroll2.ScrollDirection() === false) {
        Stick(1);
    } else if (current > 64) {
        Stick(0);
    }
    else if (current <= 64) {
        Stick(2);
    }
}


function Stick(type) {
    if (type === 1) {
        $(header).removeClass("unsticky");
        $(header).addClass("sticky");
    } else if ((type === 0)) {
        $(header).removeClass("sticky");
        $(header).addClass("unsticky");
    }
    else {
        $(header).removeClass("unsticky");
        $(header).removeClass("sticky");
    }
}


