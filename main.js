let tog = document.querySelector("nav .toggle");
let links = document.querySelector("nav .links");



tog.onclick = function() {
    links.classList.toggle("open")
    document.querySelector(".toggle .one").classList.toggle("rotate")
    document.querySelector(".toggle .two").classList.toggle("hid")
    document.querySelector(".toggle .three").classList.toggle("rotate-two")
    document.querySelector(".toggle span").classList.toggle("margin-zero")
    document.getElementById("about").classList.toggle("padding-400")
}

document.querySelector("header .last-img img").onclick = () => {
    document.querySelector("#about").scrollIntoView()
}
document.querySelector("#portfolio .last-img img").onclick = () => {
    document.querySelector("#clients").scrollIntoView()
}