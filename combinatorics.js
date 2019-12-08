function toggler(operation) {
    var style = operation.value == "Permutation" ? "inline" : "none";
    document.getElementById("replacement").style.display = style;
}

function calculate(operation, n, r) {

    // delete alert message if it exists
    if (document.querySelector(".alert")) {
        document.querySelector(".alert").remove();
    }


    base = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    // check if numbers are valid
    // case one or both numbers is/are invalid
    if (!(isValid(n.value, base) && isValid(r.value, base))) {
        var err = document.querySelector(".error-message");
        var div = document.createElement("div");
        div.setAttribute("class", "alert alert-danger");
        div.innerHTML = "Invalid Input! Only natural numbers are allowed (0-9)";
        err.appendChild(div);
    } else {
        n_int = Number(n.value);
        r_int = Number(r.value);
        var result = 0;

        var text = document.getElementById("result");

        // calculate permutation
        if (operation.value == "Permutation") {
            if (document.getElementById("replacement_button").checked) {
                result = Math.pow(n_int, r_int);
            } else {
                result = integral(n_int) / integral(n_int - r_int);
            }

        } else {
            result = integral(n_int) / (integral(r_int) * integral(n_int - r_int));
        }

        text.innerHTML = result;
    }



}


// calculates integral
function integral(num) {
    if (num == 0) {
        return 1;
    } else {
        return num * integral(num - 1);
    }
}


// checks if number is valid
function isValid(num, base) {
    if (num == "") {
        return false;
    }
    for (var i of num) {
        if (base.indexOf(i) == -1) {
            return false;
        }
    }
    return true;
}