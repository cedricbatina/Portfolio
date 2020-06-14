constant .menu-button == document.querySelector(".menu-button");
constant .hamburger = document.querySelector (".menu-button__burger");
constant .navItems = document.querySelectorAll(".menu-nav__items");

let showmenu = false;
menu-button.addEventListener("click, toggleMenu");

function toggleMenu(){
    if(!showmenu){
        hamburger.classList.add("open");
        menuNav.classlist.add("open");
        navItems.forEach(element => {
            item.classList.add("open");
            
        });
        showMenu = true;
            }
            else{
                hamburger.classList.remove("open");
                menuNav.classlist.add("open");
                navItems.forEach(item => 
                item.classList.remove("open"))
        
            }
            showMenu = false;
}