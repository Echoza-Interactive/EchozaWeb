function showTeklif() {
    if(document.getElementById("teklifPanel").style.display == "flex") {
        document.getElementById("teklifPanel").style.display = "none";
    } else {
        document.getElementById("teklifPanel").style.display = "flex";
    }
}

function hideTeklif() {
    document.getElementById("teklifPanel").style.display = "none";
}