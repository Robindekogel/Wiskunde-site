    // Random nummer wordt aangemaakt, word tot de mach van 13 gezet:
    var randomnumber = ((Math.floor(Math.random(99) *100)) +1);
    var uitkomst = Math.pow(randomnumber, 13);
    document.getElementById("root").innerHTML = "Raad de wortel van: " + uitkomst.toPrecision(50);
    console.log(randomnumber);


    // input van textField word berekent of het goed of fout is:
    function input() {
        if (randomnumber == document.getElementById("txt").value) {
            document.getElementById("antwoord").innerHTML = "Goed";

        }
        else {
            document.getElementById("antwoord").innerHTML = "Fout";

        }

    }



