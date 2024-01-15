var icon = document.querySelector(".icon");
var menu = document.querySelector(".menu");

icon.addEventListener("click", function () {
    menu.style.display = (menu.style.display == 'flex' ? 'none' : 'flex');
    menu.classList.add("menuResponce");
})