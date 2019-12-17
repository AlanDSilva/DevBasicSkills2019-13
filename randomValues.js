function showTable(from, to, num) {

    var input1 = document.querySelector("#input1");
    var input2 = document.querySelector("#input2");
    var input3 = document.querySelector("#input3");

    // In case any of the inputs is invalid
    if (!input1.checkValidity() || !input2.checkValidity() || !input3.checkValidity()) {
        // Delete existing canvas if it exists
        if (document.getElementById("myChart")) {
            document.getElementById("myChart").remove();
            if(document.querySelector(".chartjs-size-monitor")){
                document.querySelector(".chartjs-size-monitor").remove();
            }    
        }
    } else { // In case all inputs are valid
        // Delete existing canvas if it exists
        if (document.getElementById("myChart")) {
            document.getElementById("myChart").remove();
            if(document.querySelector(".chartjs-size-monitor")){
                document.querySelector(".chartjs-size-monitor").remove();
            }    
            console.log("canvas removed");
        }

        var arr = [];
        var min = parseInt(from.value, 10);
        var max = parseInt(to.value, 10) + 1;
        var n = parseInt(num.value, 10);

        // Create list of random numbers
        for (var i = 0; i < n; i++) {
            arr.push(randomNumber(min, max));
        }

        arr.sort(); // sort the list

        // Create key-value pairs of number-numberOfOcurrences
        result = {};
        arr.forEach(function (a) {
            if (a in result) {
                result[a] += 1;
            } else {
                result[a] = 1;
            }
        });

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
                    label: "Occurrences",
                    backgroundColor: "rgb(255, 99, 132)",
                    data: Object.values(result)
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
}

// returns random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
