console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = "New Value";

var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
    marginLeft += 1;
    image.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var Interval = setInterval(moveRight, 50);
};