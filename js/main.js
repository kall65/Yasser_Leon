let menu_icon = document.getElementById("menu_icon");
let links = document.getElementById("links");

menu_icon.onclick = () => {
  links.classList.toggle("active");
};
