function showTable(from, to, num) {

    // delete flash alert message if it exists
    if (document.querySelector(".alert")) {
        document.querySelector(".alert").remove();
    }


    //
    var base = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (!(isValid(from.value, base) && isValid(to.value, base) && isValid(num.value, base))) {
        var err = document.querySelector(".error-message");
        var div = document.createElement("div");
        div.setAttribute("class", "alert alert-danger");
        div.innerHTML = "Invalid input entered!";
        err.appendChild(div);
    } else {
        var arr = [];
        var min = parseInt(from.value, 10);
        var max = parseInt(to.value, 10) + 1;
        var n = parseInt(num.value, 10);

        for (var i = 0; i < n; i++) {
            arr.push(randomNumber(min, max));
        }

        arr.sort();

        result = {};
        arr.forEach(function (a) {
            if (a in result) {
                result[a] += 1;
            } else {
                result[a] = 1;
            }
        });


        // Delete existing canvas
        var canvas = document.getElementById("myChart");
        canvas.remove();
        console.log("canvas removed");

        // Recreate canvas
        var body = document.body;
        var col9 = document.querySelector(".col-9");
        canvas = document.createElement("canvas");
        canvas.setAttribute("id", "myChart");
        col9.appendChild(canvas);
        console.log("new canvas created");

        // Add chart to canvas
        var myChart = canvas.getContext("2d");


        var massPopChart = new Chart(myChart, {
            type: 'bar',
            data: {
                labels: Object.keys(result),
                datasets: [{
                    label: 'Occurrences',
                    backgroundColor: 'rgb(255, 99, 132)',
                    data: Object.values(result)
                }]
            },
            options: {}
        });
    }


}



// returns random number
function randomNumber(min, max) {

    return Math.floor(Math.random() * (max - min) + min);
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