//creates table
function createTable() {
    var dec = range(1, 50);
    var body = document.body;
    var table = document.createElement('table');
    table.setAttribute("id", "table");

    table.style.wdth = "100%";
    //table.style.border = "1px solid black";
    for (var i = 1; i <= 50; i++) {
        if (i == 1) {
            tr = table.insertRow();

            th = tr.insertCell();
            th.appendChild(document.createTextNode("DEC"));
            th = tr.insertCell();
            th.appendChild(document.createTextNode("BIN"));
            th = tr.insertCell();
            th.appendChild(document.createTextNode("OCT"));
            th = tr.insertCell();
            th.appendChild(document.createTextNode("HEX"));
            


        }
        var tr = table.insertRow();
        for (var j = 0; j < 4; j++) {
            var td = tr.insertCell();
            if (j == 1) {
                td.appendChild(document.createTextNode(fromDec(2, i)));
            } else if (j == 2) {
                td.appendChild(document.createTextNode(fromDec(8, i)));
            } else if (j == 3) {
                td.appendChild(document.createTextNode(fromDec(16, i)));
            } else {
                td.appendChild(document.createTextNode(i));
            }

            td.style.border = "1px solid black";
        }

    }

    body.appendChild(table);

}

// deletes table
function deleteTable() {
    table = document.getElementById("table");
    table.remove();

}


// return array of numbers from "start" to "end"
function range(start, end) {
    var n = [];
    for (var i = start; i <= end; i++) {
        n.push(i);
    }
    return n;
}

// converts from decimal
function fromDec(to, num) {
    var result = num.toString(to);
    return result;
}