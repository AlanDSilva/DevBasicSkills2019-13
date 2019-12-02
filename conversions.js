//Conversions from and to decimal will be the midway
// decides order of conversions
function calculate(from, to, num){
    var result = document.getElementById("result");
    var options = {
        "DEC" : 10,
        "BIN" : 2,
        "OCT" : 8,
        "HEX" : 16
    }
  
    if(from.value != "DEC" && to.value != "DEC"){
        // 2 step process
        var intermediate = toDec(options[from.value], num.value);
        result.innerHTML = fromDec(options[to.value], intermediate);
    } else {
        // 1 step process
        if(from.value == "DEC"){
            result.innerHTML = fromDec(options[to.value], num.value);
        } else if(to.value == "DEC"){
            result.innerHTML = toDec(options[from.value], num.value);
        }
    }
}

// converts from decimal
function fromDec(to, num){
    var n = parseInt(num);
    var result = n.toString(to);
    return result;
}

function toDec(from, num){
    var result = parseInt(num, from);
    return result;
}