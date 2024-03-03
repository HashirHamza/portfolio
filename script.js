var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function openTab(tabName){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

/* responsive */

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}


/* dark mode sun mode */

var icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("low-theme");
    if(document.body.classList.contains("low-theme")){
        icon.src = "images/sun.png";
    }else{
        icon.src = "images/moon.png";
    }

}