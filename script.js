function toggleMenu() {
    var toggle = document.getElementById("navigation");
    if (toggle.style.display === "none") {
        toggle.style.display = "block";
    } 
    else {
    toggle.style.display = "none";
    }
}

function goHome() {
    var pages = ["join", "aboutTBR", "currentlyReading", "previouslyRead", "navigation"]
    var homepage = document.getElementById("home");
    homepage.style.display = "block";
    for (var i = 0; i < pages.length; i++) {
        var page = pages[i];
        var nextpage = document.getElementById(page);
        nextpage.style.display = "none"
    }
}

function goJoin() {
    var pages = ["home", "aboutTBR", "currentlyReading", "previouslyRead", "navigation"]
    var homepage = document.getElementById("join");
    homepage.style.display = "block";
    for (var i = 0; i < pages.length; i++) {
        var page = pages[i];
        var nextpage = document.getElementById(page);
        nextpage.style.display = "none"
    }  
}

function goAboutTBR() {
    var pages = ["home", "join", "currentlyReading", "previouslyRead", "navigation"]
    var homepage = document.getElementById("aboutTBR");
    homepage.style.display = "block";
    for (var i = 0; i < pages.length; i++) {
        var page = pages[i];
        var nextpage = document.getElementById(page);
        nextpage.style.display = "none"
    }  
}

function goCurrentlyReading() {
    var pages = ["home", "join", "aboutTBR", "previouslyRead", "navigation"]
    var homepage = document.getElementById("currentlyReading");
    homepage.style.display = "block";
    for (var i = 0; i < pages.length; i++) {
        var page = pages[i];
        var nextpage = document.getElementById(page);
        nextpage.style.display = "none"
    }  
}

function goPreviouslyRead() {
    var pages = ["home", "join", "aboutTBR", "currentlyReading", "navigation"]
    var homepage = document.getElementById("previouslyRead");
    homepage.style.display = "block";
    for (var i = 0; i < pages.length; i++) {
        var page = pages[i];
        var nextpage = document.getElementById(page);
        nextpage.style.display = "none"
    }  
}

