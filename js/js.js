let body = document.querySelector("body");
let imgsarray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg"];
setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgsarray.length);
    body.style.backgroundImage = 'url("images/' + imgsarray[randomNumber] + '")';
}, 5000);

document.querySelector(".head i").onclick = function () {
    document.querySelector("ul").classList.toggle("open")
};