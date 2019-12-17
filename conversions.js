
// Changes acceptable pattern and error message
function changePattern(from) {
    var input = document.querySelector("#input");
    var result = document.querySelector("#result");
    result.innerHTML = "";
    switch (from.value) {
        case "DEC": input.pattern = "[0-9]+"; input.title = "Decimal number [0-9]"; break;
        case "BIN": input.pattern = "[01]+"; input.title = "Binary number [0-1]"; break;
        case "OCT": input.pattern = "[0-7]+"; input.title = "Octal number [0-7]"; break;
        case "HEX": input.pattern = "[0-9a-f]+"; input.title = "Hexadecimal number [0-9 and a-f]"; break;
    }
}

// Swaps FROM and TO inputs
function swap(from, to) {
    var temp = from.value;
    from.value = to.value;
    to.value = temp;

    var input = document.querySelector("#input");
    var result = document.querySelector("#result");

    input.value = result.innerHTML;
    result.innerHTML = "";
    changePattern(from); 
}

// Perform conversion
function calculate(from, to, num) {

    var input = document.querySelector("#input");
    var result = document.getElementById("result");

    if (input.checkValidity()) { // when number within range

        var options = {
            "DEC": 10,
            "BIN": 2,
            "OCT": 8,
            "HEX": 16
        }

        //Conversions from and to decimal will be the midway
        if (from.value != "DEC" && to.value != "DEC") {
            // 2 step process: from and to decimal will be the midway
            var intermediate = toDec(options[from.value], num.value);
            result.innerHTML = fromDec(options[to.value], intermediate);
        } else {
            // 1 step process: from decimal to other 
            if (from.value == "DEC") {
                result.innerHTML = fromDec(options[to.value], num.value);
            } else if (to.value == "DEC") {
                result.innerHTML = toDec(options[from.value], num.value);
            }
        }
    } else{
        result.innerHTML = "";
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

