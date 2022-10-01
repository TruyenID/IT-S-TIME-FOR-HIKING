const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const over_hidden = document.querySelector('body');
const scroll_header = document.querySelector('.header');

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    menu.classList.toggle("active");
    over_hidden.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener("click", () => {
    toggle.classList.remove("active");
    menu.classList.remove("active");
    over_hidden.classList.remove('active');
}));
window.addEventListener("scroll", function(){
    scroll_header.classList.toggle("sticky", window.scrollY > 0);
});