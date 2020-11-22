function password() {
    var password = "admission";
    var x = prompt("Not all contents are available to everyone \nEnter your secret passphrase","'Open seasame'");
    if (x.toLowerCase() == password) {
     window.location = "work-mainapp.html";
    }
    else {
    alert("Come back again with the correct password 🤟🏽");
    //  window.location = "index.html";
    }
}