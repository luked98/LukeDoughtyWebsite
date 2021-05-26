'use strict';

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("side").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    setTimeout(() => {document.getElementById("smallSide").style.display = "none";}, 100)
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("side").style.width = "0";
    document.getElementById("main").style.marginLeft = "50px";
    setTimeout(() => {document.getElementById("smallSide").style.display = "block";}, 200)
}