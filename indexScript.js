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

let st = [1, 21, 31];
let nd = [2, 22];
let rd = [3, 23];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function dateOrdinal(d) {
    if (st.includes(d)) {
        return "st";
    } else if (nd.includes(d)) {
        return "nd";
    } else if (rd.includes(d)) {
        return "rd";
    } else {
        return "th";
    }
}

function setDate() {
    let dt = new Date();

    let day = days[dt.getDay()];
    let date = dt.getDate();
    let month = months[dt.getMonth()];
    let year = dt.getFullYear();

    document.getElementById("dateTime").innerHTML = day + " " + date + dateOrdinal(date) + " " + month + " " + year;
}

let initTime = () => {
    setDate();
}

window.addEventListener("load", initTime)