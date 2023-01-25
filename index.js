// slider
const slider = document.getElementById("slider");
const output = document.getElementById("slider-output");
output.innerHTML = slider.value;

document.getElementById("slider").oninput = function() {
    output.innerHTML = this.value;
    // let sliderWidthvalue = (this.value-this.min)/(this.max-this.min)*100
    // this.style.background = 'linear-gradient(to left, ##8026FF 0%, #101820 ' + sliderWidthvalue + '%, #fff ' + sliderWidthvalue + '%, white 100%)'
};


// Spoiler

document.querySelectorAll(".spoiler__title").forEach(spoilertitle => {
    spoilertitle.addEventListener("click", function(event) {
        event.preventDefault();
        event.target.closest('.spoiler').classList.toggle("open");
    });
})



