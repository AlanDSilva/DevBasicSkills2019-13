// Swaping FROM and TO
function swap(from, to){
    var temp = from.value;
    from.value = to.value;
    to.value = temp;
}

//Conversions from and to decimal will be the midway
// decides order of conversions
function calculate(from, to, num) {

    // delete alert message if it exists
    if(document.querySelector(".alert")){
        document.querySelector(".alert").remove();  
    }

    // Number validation and bound string declaration
    var bounds;
    switch (from.value) {
        case "DEC": var validated = isValid(num.value, ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]); bounds = "(0-9)"; break;
        case "BIN": var validated = isValid(num.value, ["0", "1"]); bounds = "(0-1)"; break;
        case "OCT": var validated = isValid(num.value, ["0", "1", "2", "3", "4", "5", "6", "7"]); bounds = "(0-7)"; break;
        case "HEX": var validated = isValid(num.value, ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]); bounds = "(0-9 and a-f)"; break;
    }


    var result = document.getElementById("result");

    
    if (validated == false) { // when number out of range will show flash message

        result.innerHTML = "Entered number is invalid"

        // flash message
        var div = document.createElement("div");
        var err = document.querySelector(".error-message");
        div.setAttribute("class", "alert alert-danger");
        div.innerHTML = "Entered number is out of bounds! It should be in range " + bounds;
        err.appendChild(div);

    } else { // conversions calculations

        var options = {
            "DEC": 10,
            "BIN": 2,
            "OCT": 8,
            "HEX": 16
        }

        if (from.value != "DEC" && to.value != "DEC") {
            // 2 step process
            var intermediate = toDec(options[from.value], num.value);
            result.innerHTML = fromDec(options[to.value], intermediate);
        } else {
            // 1 step process
            if (from.value == "DEC") {
                result.innerHTML = fromDec(options[to.value], num.value);
            } else if (to.value == "DEC") {
                result.innerHTML = toDec(options[from.value], num.value);
            }
        }
    }


}

// converts FROM decimal
function fromDec(to, num) {
    var n = parseInt(num);
    var result = n.toString(to);
    return result;
}

// converts TO decimal
function toDec(from, num) {
    var result = parseInt(num, from);
    return result;
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