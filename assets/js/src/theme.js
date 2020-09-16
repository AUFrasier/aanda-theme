//globals
const flyoutMenuIcon = document.getElementById("nav-bars");
const flyoutMenu = document.getElementById("mobile-menu");
const flyoutMenuItems = document.querySelectorAll('#mobile-menu li a');
const mobilMenuInput = document.getElementById("nav");
var primaryContent = document.getElementById("front-page-hero");
var stickymenu = document.getElementById("front-page-header");
var stickymenuoffset = stickymenu.offsetTop;

flyoutMenuIcon.addEventListener("click", function() {
	flyoutMenu.classList.toggle('is-visible');
})
flyoutMenuItems.forEach(element => {
	element.addEventListener("click", function() {
		mobilMenuInput.checked = false;
	})
});

window.addEventListener("scroll", function(e){
    requestAnimationFrame(function(){
        if (window.pageYOffset > stickymenuoffset){
            stickymenu.classList.add('sticky');
            primaryContent.classList.add('sticky-active-prim');
        }
        else{
            stickymenu.classList.remove('sticky');
            primaryContent.classList.remove('sticky-active-prim');
        }
    })
})
