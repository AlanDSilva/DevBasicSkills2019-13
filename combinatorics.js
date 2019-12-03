function toggler(operation) {
    var style = operation.value == "Permutation" ? "inline" : "none";
    document.getElementById("replacement").style.display = style;
}

function calculate(operation, n, r) {

    n_int = Number(n.value);
    r_int = Number(r.value);
    var result = 0;

    var text = document.getElementById("result");

    // calculate permutation
    if (operation.value == "Permutation") {
        if(document.getElementById("replacement_button").checked){
            result = Math.pow(n_int, r_int);
        } else{
            result = integral(n_int)/integral(n_int-r_int);
        }
        
    } else {
        result = integral(n_int) / (integral(r_int) * integral(n_int - r_int));
    }

    text.innerHTML = result;
}


// calculates integral
function integral(num) {
    if (num == 0) {
        return 1;
    } else {
        return num * integral(num - 1);
    }
}