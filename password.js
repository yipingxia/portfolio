function passwordMSTA() {
    var password = "1011";
    var x = prompt("Not all contents are available to everyone \nEnter your secret passphrase","'Open seasame'");
    if (x.toLowerCase() == password) {
     window.location = "work-mainapp.html";
    }
    else {
    alert("Come back again with the correct password 🤟🏽");
    //  window.location = "index.html";
    }
}


function passwordOPENG() {
    var password = "00110";
    var x = prompt("👀 This showcase includes strategic works. \nAsk Eva for the access code:");
    if (x.toLowerCase() == password) {
     window.location = "work-OPENG.html";
    }
    else {
    alert("Ask Eva if you wish to see the works 🤟🏽");
    //  window.location = "index.html";
    }
}

function passwordBOD() {
    var password = "000";
    var x = prompt("👀 This showcase includes internal business insights & intelligience. \nAsk Eva for the access code:");
    if (x.toLowerCase() == password) {
     window.location = "work-BOD.html";
    }
    else {
    alert("Ask Eva if you wish to see the works 🤟🏽");
    //  window.location = "index.html";
    }
}
