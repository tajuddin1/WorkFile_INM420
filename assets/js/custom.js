var hamburger_icon = document.getElementById("hamburger_icon");
var menu = document.getElementById("mobile_menu");

hamburger_icon.onclick = function() {
    menu.classList.toggle("extend");
}