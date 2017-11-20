
function Wortel() {
    var invoer = prompt("Wortel van:");
    if (invoer != null) {
        getal = Math.sqrt(invoer);
        alert(getal);
        document.getElementById("wortel").innerHTML =
            "Wortel van " + invoer + " = " + getal;
    }
}
