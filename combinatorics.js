function toggler(operation) {
    var style = operation.value == "Permutation" ? "inline" : "none";
    document.getElementById("replacement").style.display = style;
}

function calculate(operation, n, r) {


    var n_int = Number(n.value);
    var r_int = Number(r.value);
    var result = 0;
    var text = document.getElementById("result");
    var r_validation = document.querySelector("#r");

    if (r_int <= n_int) {
        
        r_validation.setCustomValidity("");
        
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
    } else{
        text.innerHTML = "";
        r_validation.setCustomValidity("Must be a Natural number [0-9] smaller than n-Value");
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

