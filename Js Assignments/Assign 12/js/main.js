var imgs = document.querySelectorAll("img");
var layer = document.querySelector(".layer");
var imgBox = document.querySelector(".img-box");
var prev = document.querySelector(".fa-angle-left");
var close = document.querySelector(".fa-square-xmark");
var next = document.querySelector(".fa-angle-right");
var currIndex = 0;

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function() {
    layer.classList.remove("d-none");
    var imgSrc = imgs[i].getAttribute("src");
    imgBox.style.backgroundImage = `url("../${imgSrc}")`;
    currIndex = i;
  });
}

var closeLayer = function() {
  layer.classList.add("d-none");
};
close.addEventListener("click", closeLayer);

var nextLayer = function() {
  ++currIndex;
  if (currIndex == imgs.length) currIndex = 0;
  var imgSrc = imgs[currIndex].getAttribute("src");
  imgBox.style.backgroundImage = `url("../${imgSrc}")`;
};
next.addEventListener("click", nextLayer);

var prevLayer = function() {
  --currIndex;
  if (currIndex == -1) currIndex = imgs.length - 1;
  var imgSrc = imgs[currIndex].getAttribute("src");
  imgBox.style.backgroundImage = `url("../${imgSrc}")`;
}
prev.addEventListener("click", prevLayer);


document.addEventListener("keydown", function(e) {
  if (e.key == "ArrowRight") nextLayer();
  if (e.key == "Escape") closeLayer();
  if (e.key == "ArrowLeft") prevLayer();
});