let options = {
    root: null,
    threshold: 0.2
}

var leftList = document.getElementsByClassName("left-tattoo");
var rightList = document.getElementsByClassName("right-tattoo");
var images = document.getElementsByClassName("tattoo-image");
var galleryTattoo = document.querySelector(".gallery-tattoo");
var wrappers = document.getElementsByClassName("tattoo-wrapper");


var length = leftList.length;   var i = 0;
var counters = [];
for(i = 0; i < length; i++) { counters.push(0); }

var galBorders = function (entries){
    for(i = 0; i < length; i++){
        if(counters[i] == 1)
        {
            leftList[i].style.transition = `height 200ms linear ${i/8}s, width 200ms linear ${i/8 + 0.2}s`;
            leftList[i].style.width = `${leftList[i].nextElementSibling.offsetWidth}px`;
            leftList[i].style.height = `${leftList[i].nextElementSibling.offsetHeight}px`;
            leftList[i].classList.add("left-tattoo-vis");

            images[i].firstElementChild.style.transition = `width 300ms linear ${i/8 + 0.9}s, height 300ms linear ${i/8 + 0.9}s, visibility 300ms linear ${i/8 + 0.9}s`;
            images[i].classList.add("tattoo-image-vis");
            // wrappers[i].style.transition = `box-shadow 200ms linear ${1/8+0.8}s`;
            // wrappers[i].classList.add("tattoo-wrapper-vis");

            rightList[i].style.transition = `height 200ms linear ${i/8 + 0.4}s, width 200ms linear ${i/8 + 0.6}s`;
            rightList[i].style.width = `${rightList[i].previousElementSibling.offsetWidth}px`;
            rightList[i].style.height = `${rightList[i].previousElementSibling.offsetHeight}px`;
            rightList[i].classList.add("right-tattoo-vis");
            counters[i] += 1;
        }   else {  if(counters[i] == 0)    counters[i] += 1;}
    }
}
var galObserver = new IntersectionObserver(galBorders, options);
galObserver.observe(galleryTattoo);







var pictureBk = document.getElementsByClassName("gr-bk-2");
var zoomImg = function() {
    var grBk = document.getElementById("gr-background-2");
    grBk.style.zIndex = 101;

    var image = this.previousElementSibling;
    var clone = image.cloneNode();
    clone.classList.add("zoomed-image");
    
    document.getElementById("image-zoom").innerHTML = "";
    document.getElementById("image-zoom").appendChild(clone);
}
for(i = 0; i < length; i++) {
      pictureBk[i].onclick = zoomImg
}

document.getElementById("gr-background-2").onclick = function() {
document.getElementById("gr-background-2").style.zIndex = `-1`;
}