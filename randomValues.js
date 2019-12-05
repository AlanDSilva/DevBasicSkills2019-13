function showTable(from, to, num) {
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
                data: Object.values(result)
            }]
        },
        options: {}
    });
}




function randomNumber(min, max) {

    return Math.floor(Math.random() * (max - min) + min);
}