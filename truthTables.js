// Input values
var p = [false, false, true, true];
var q = [false, true, false, true];

// Possible output values
results = {
    "AND": p.map(function (value, index) {return (value && q[index]);}),
    "OR": p.map(function (value, index) {return (value || q[index]);}),
    "NAND": p.map(function (value, index) {return !(value && q[index]);}),
    "NOR": p.map(function (value, index) {return !(value || q[index]);}),
    "XOR": p.map(function (value, index) {return (value != q[index]);}),
    "XNOR": p.map(function (value, index) {return (value == q[index]);})    
}



function changeTable(operation) {
    
    //Deletes a table if found
    if(document.getElementById("table")){
        document.getElementById("table").remove();
    }
    
    //creates new table
    var col9 = document.querySelector(".col-9");
    var table = document.createElement("table");
    table.setAttribute("id", "table");

    table.style.width = "100%";
    for (var i = 0; i < 4; i++) {
        if (i == 0) {
            tr = table.insertRow();

            th = tr.insertCell();
            th.appendChild(document.createTextNode("INPUT 1"));
            th = tr.insertCell();
            th.appendChild(document.createTextNode("INPUT 2"));
            th = tr.insertCell();
            th.appendChild(document.createTextNode("OUTPUT"));
        }
        var tr = table.insertRow();
        for (j = 0; j < 3; j++) {
            var td = tr.insertCell();
            switch(j){ 
                case 0: td.appendChild(document.createTextNode(p[i])); break;
                case 1: td.appendChild(document.createTextNode(q[i])); break;
                case 2: td.appendChild(document.createTextNode(results[operation.value][i]));
            }
            td.style.border = "1px solid black";
        }
    }
    col9.appendChild(table);
}
