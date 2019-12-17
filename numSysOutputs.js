//creates table
function toggleTable() {

    // Delete table if it exists
    if (document.getElementById("table"))  {
        document.getElementById("table").remove();

        // Change button's color and text
        var button = document.querySelector("button");
        //button.style.backgroundColor = "blue";
        button.classList.remove("btn-danger");
        button.classList.add("btn-primary");
        button.innerHTML = "Create Table";

    } else  { // Creates new table
        var col9 = document.querySelector(".col-9");
        var table = document.createElement("table");
        table.setAttribute("id", "table");

        table.style.width = "100%";
        for (var i = 1; i <= 50; i++) {

            // Table headers
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

            // Table contents
            for (var j = 0; j < 4; j++) {
                var td = tr.insertCell();
                switch(j){
                    case 0: td.appendChild(document.createTextNode(i)); break;
                    case 1: td.appendChild(document.createTextNode(fromDec(2, i))); break;
                    case 2: td.appendChild(document.createTextNode(fromDec(8, i))); break;
                    case 3: td.appendChild(document.createTextNode(fromDec(16, i))); break;
                }
                td.style.border = "1px solid black";
            }
        }
        col9.appendChild(table);

        // Change button's color and text
        var button = document.querySelector("button");
        button.classList.remove("btn-primary");
        button.classList.add("btn-danger");
        button.innerHTML = "Delete Table";
    }
}

// Converts from decimal to every numbering system
function fromDec(to, num) {
    var result = num.toString(to);
    return result;
}