var navButton = document.getElementById("arrows-nav")
var topNav = document.querySelector(".nav-top")
var navItems = document.getElementsByClassName("nav-link")
var navAnimationCheck = 0

var leftLine = document.querySelector(".one-nav");
var rightLine = document.querySelector(".two-nav");
navButton.onclick = () => {
    topNav.classList.toggle("nav-top-mobile");
    leftLine.classList.toggle("one-nav-mobile");
    rightLine.classList.toggle("two-nav-mobile");
    
    for(i=0; i<navItems.length; i++)
    {
        if(navAnimationCheck)
        {
            navItems[navItems.length - 1 - i].style.animation=`navSlideOut 0.4s ease-out forwards ${i/8 + 0.05}s`;
        }
        else
        {
            navItems[i].style.animation=`navSlideIn 0.4s ease-out forwards ${i/8+0.05}s`;
        }
    }
    navAnimationCheck = 1 - navAnimationCheck;


    document.querySelector(".gr-background-1").classList.toggle("gray-bckgr");

}