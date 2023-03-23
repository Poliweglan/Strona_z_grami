function openNav() {
    document.getElementById("testSidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("testSidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "50px";
}

function openPage(pageName) {
    var i, gamecontent, tablinks;
    tablinks = document.getElementsByClassName("tablinks");
    gamecontent = document.getElementsByClassName("gamecontent");
    for (i=0; i<gamecontent.length; i++) {
        gamecontent[i].style.display = "none"
    }
    
    document.getElementById(pageName).style.display = "block";
}