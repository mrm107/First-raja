
window.addEventListener('resize', ResizeSlider, true);
const Timer = 6000;
const SliderContainer = document.getElementById("SliderContainer1");
const Slider = $("#SliderGroup1");
const Slide = $(".SlideGroup1");
const MaxWidth = 1360;
let ParentPadding = parseInt($("#SliderParentContainer1").css("padding-left")) + parseInt($("#SliderParentContainer1").css("padding-right"));
let ParentWidth = parseInt($("#SliderParentContainer1").css("width")) - ParentPadding;
let SliderContainerWidth = Math.min(MaxWidth, ParentWidth)
let Gap = 20;
let Count = 3;
let SlideWidth = (SliderContainerWidth - ((Count - 1) * Gap)) / Count;
let num = 0;
let TimerSlide = setInterval(MoveSlider, Timer);

function ResizeSlider() {
    ParentPadding = parseInt($("#SliderParentContainer1").css("padding-left")) + parseInt($("#SliderParentContainer1").css("padding-right"));
    ParentWidth = parseInt($("#SliderParentContainer1").css("width")) - ParentPadding;
    SliderContainerWidth = Math.min(MaxWidth, ParentWidth)
    if (SliderContainerWidth > 1360) {
        Gap = 20;
        Count = 3;
    }
    else if (SliderContainerWidth > 992) {
        Gap = 20;
        Count = 3;
    }
    else if (SliderContainerWidth > 768) {
        Gap = 20;
        Count = 2;
    }
    else if (SliderContainerWidth > 568) {
        Gap = 20;
        Count = 2;
    } else {
        Gap = 20;
        Count = 1;
    }
    SlideWidth = (SliderContainerWidth - ((Count - 1) * Gap)) / Count;
    $(SliderContainer).css({
        width: SliderContainerWidth + "px",
    });
    Slide.css({
        width: SlideWidth + "px",
    });

    const TotalDots = ($(".SlideGroup1").length) / Count;
    const PastDots = document.getElementById("SliderDotsGroup1");
    PastDots.innerHTML = '';
    let Dots = [];
    for (let i = 0; i < TotalDots; i++) {
        Dots.push(document.getElementById("SliderDotsGroup1").appendChild(document.createElement('span')));
        Dots[i].onclick = function () { CurrentPage(i * Count) };
    }
    $(document.getElementById("SliderDotsGroup1").children[0]).addClass("active");

}
ResizeSlider();


function MoveSlider() {
    const TotalSlide = ($(".SlideGroup1").length) - Count;
    const SlideWidth = ((SliderContainerWidth - ((Count - 1) * Gap)) / Count) + Gap;
    const Slider = $("#SliderGroup1");
    console.log(num);
    Slider.css({
        "transform": "translate3d(" + (-SlideWidth * num) + "px, 0px, 0px)",
        "transition": ".5s",
    });
    if (num >= TotalSlide) {
        $(document.getElementById("SliderDotsGroup1").children).removeClass("active");
        $(document.getElementById("SliderDotsGroup1").children[parseInt(num / Count)]).addClass("active");
        num = 0;
    } else {
        $(document.getElementById("SliderDotsGroup1").children).removeClass("active");
        $(document.getElementById("SliderDotsGroup1").children[parseInt(num / Count)]).addClass("active");
        num += 1;
    }

}



function CurrentPage(selectnum) {
    num = selectnum;
    MoveSlider();
}


let isDown = false;
let startX;

SliderContainer.addEventListener('mousedown', (e) => {
    clearInterval(TimerSlide);
    var currTrans = Slider.css('transform').split(/[()]/)[1];
    const LastTransform = parseInt((currTrans.split(',')[4]));
    isDown = true;
    startX = e.pageX - LastTransform;
    Slider.css({
        "cursor": "grabbing",
    });
});
SliderContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const walk = ((e.pageX - startX)); //scroll-fast
    Slider.css({
        "transform": "translate3d(" + (walk) + "px, 0px, 0px)",
        "transition": "0s",
    });

});



SliderContainer.addEventListener('mouseleave', SliderUnActive);
SliderContainer.addEventListener('mouseup', SliderUnActive);



SliderContainer.addEventListener('touchstart', (e) => {
    clearInterval(TimerSlide);
    var currTrans = Slider.css('transform').split(/[()]/)[1];
    const LastTransform = parseInt((currTrans.split(',')[4]));
    isDown = true;
    startX = e.touches[0].clientX - LastTransform;
});
SliderContainer.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const walk = ((e.touches[0].clientX - startX)); //scroll-fast
    Slider.css({
        "transform": "translate3d(" + (walk) + "px, 0px, 0px)",
        "transition": "0s",
    });
});
SliderContainer.addEventListener('touchend', SliderUnActive);
SliderContainer.addEventListener('touchcancel', SliderUnActive);


function SliderUnActive() {
    clearInterval(TimerSlide);
    var currTrans = Slider.css('-webkit-transform').split(/[()]/)[1];
    const LastTransform = -(currTrans.split(',')[4]);
    const TotalSlide = ($(".SlideGroup1").length) - Count;
    const SlideNum = parseInt(LastTransform / (SlideWidth + Gap));
    const SlideNumRemain = (LastTransform / (SlideWidth + Gap)) - SlideNum;
    Slider.css({
        "cursor": "grab",
    });
    if (LastTransform < 0)
        num = 0;
    else if (TotalSlide <= SlideNum)
        num = TotalSlide;
    else if (SlideNumRemain >= .5) {
        num = SlideNum + 1;
    }
    else if (SlideNumRemain < .5) {

        num = SlideNum;
    }
    MoveSlider();
    isDown = false;
    TimerSlide = setInterval(MoveSlider, Timer);

}







