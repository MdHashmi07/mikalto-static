const rightBtn = document.querySelectorAll(".right");
const leftBtn = document.querySelectorAll(".left");

let flag = 0;

displayData(flag);

rightBtn.forEach(element => {
    element.addEventListener("click", () => {
        let n1 = 1;
        flag = flag + n1;
        displayData(flag);
    });
});

leftBtn.forEach(element => {
    element.addEventListener("click", () => {
        let n1 = 1;
        flag = flag - n1;
        displayData(flag);
    });
});

function displayData(num) {
    let slider = document.getElementsByClassName("slider");
    console.log(slider);

    for (let item of slider) {
        item.style.display = "none";
    }

    if (num >= slider.length) {
        flag = 0;
        num = 0;
    } else if (num < 0) {
        flag = slider.length - 1;
        num = slider.length - 1;
    }

    slider[num].style.display = "block";
}
