
var number = Math.floor(Math.random() * 11);
sessionStorage.setItem("number", number);


function checkNumber() {
    var userNumber = document.getElementById("number").value;

    var storedNumber = sessionStorage.getItem("number");

    if (userNumber == storedNumber) {
        var message = "Попадание!";
        showMessage(message, "green", false);
    } 
    else {
        var message = "Мимо!";
        showMessage(message, "red", true);
    }
}

function showMessage(message, color, showRetryButton) {
    var alertBox = document.createElement("div");
    alertBox.style.padding = "10px";
    alertBox.style.backgroundColor = color;
    alertBox.style.color = "white";
    alertBox.style.width = "200px";
    alertBox.style.borderRadius = "5px";
    alertBox.style.position = "fixed";
    alertBox.style.top = "50%";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translate(-50%, -50%)";
    alertBox.style.textAlign = "center";
    alertBox.textContent = message;
    document.body.appendChild(alertBox);

    if (showRetryButton) {
        var retryButton = document.createElement("button");
        retryButton.textContent = "Ввести число заново";
        retryButton.style.marginTop = "10px";
        retryButton.style.padding = "5px 10px";
        retryButton.style.backgroundColor = "black";
        retryButton.style.border = "none";
        retryButton.style.cursor = "pointer";
        retryButton.onclick = function() {
            alertBox.parentNode.removeChild(alertBox);
            document.getElementById("number").value = "";
        };
        alertBox.appendChild(retryButton);
    }

    setTimeout(function() {
        alertBox.parentNode.removeChild(alertBox);
    }, 3000);
}
