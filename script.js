function setup() {
    var socket = io();
    var side = 40;
    var matrix = [];

    let weatherElement = document.getElementById('weather');
    let grassCountElement = document.getElementById('grassCount');
    let grassLiveCountElement = document.getElementById('grassLiveCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let grassEaterLiveCountElement = document.getElementById('grassEaterLiveCount');
    let peopleCountElement = document.getElementById('peopleCount');
    let peopleLiveCountElement = document.getElementById('peopleLiveCount');
    let predatorCountElement = document.getElementById('predatorCount');
    let predatorLiveCountElement = document.getElementById('predatorLiveCount');
    let zombieCountElement = document.getElementById('zombieCount');
    let zombieLiveCountElement = document.getElementById('zombieLiveCount');
    let hunterCountElement = document.getElementById('hunterCount');
    let hunterLiveCountElement = document.getElementById('hunterLiveCount');
    let tankCountElement = document.getElementById('tankCount');
    let tankLiveCountElement = document.getElementById('tankLiveCount');


    socket.on("data", drawCreatures);

    function drawCreatures(data) {

        matrix = data.matrix;
        weatherElement.innerText = data.weather;
        grassCountElement.innerText = data.grassCount;
        grassLiveCountElement.innerText = data.grassLiveCount;
        grassEaterCountElement.innerText = data.grassEaterCount;
        grassEaterLiveCountElement.innerText = data.grassEaterLiveCount;
        peopleCountElement.innerText = data.peopleCount;
        peopleLiveCountElement.innerText = data.peopleLiveCount;
        predatorCountElement.innerText = data.predatorCount;
        predatorLiveCountElement.innerText = data.predatorLiveCount;
        zombieCountElement.innerText = data.zombieCount;
        zombieLiveCountElement.innerText = data.zombieLiveCount;
        hunterCountElement.innerText = data.hunterCount;
        hunterLiveCountElement.innerText = data.hunterLiveCount;
        tankCountElement.innerText = data.tankCount;
        tankLiveCountElement.innerText = data.tankLiveCount;

        createCanvas(matrix[0].length * side, matrix.length * side)

        background('#acacac');

        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if (data.weather == "Ամառ") {
                        fill("green");
                    }
                    else if (data.weather == "Աշուն") {
                        fill("orange");
                    }
                    else if (data.weather == "Ձմեռ") {
                        fill("#d1d1d1");
                    }
                    else if (data.weather == "Գարուն") {
                        fill("#689e74");
                    }
                } else if (matrix[i][j] == 2) {
                    if (data.weather == "Ամառ") {
                        fill("#eeff00");
                    }
                    else if (data.weather == "Աշուն") {
                        fill("#c6d406");
                    }
                    else if (data.weather == "Ձմեռ") {
                        fill("#98a303");
                    }
                    else if (data.weather == "Գարուն") {
                        fill("#778000");
                    }
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                } else if (matrix[i][j] == 3) {
                    if (data.weather == "Ամառ") {
                        fill("#ff0000");
                    }
                    else if (data.weather == "Աշուն") {
                        fill("#ba0000");
                    }
                    else if (data.weather == "Ձմեռ") {
                        fill("#820303");
                    }
                    else if (data.weather == "Գարուն") {
                        fill("#5c0303");
                    }
                } else if (matrix[i][j] == 4) {
                    if (data.weather == "Ամառ") {
                        fill("#000000");
                    }
                    else if (data.weather == "Աշուն") {
                        fill("#242424");
                    }
                    else if (data.weather == "Ձմեռ") {
                        fill("#474747");
                    }
                    else if (data.weather == "Գարուն") {
                        fill("#666666");
                    }
                }
                else if (matrix[i][j] == 5) {
                    if (data.weather == "Ամառ") {
                        fill("#ffffff");
                    }
                    else if (data.weather == "Աշուն") {
                        fill("#dedede");
                    }
                    else if (data.weather == "Ձմեռ") {
                        fill("#9e9e9e");
                    }
                    else if (data.weather == "Գարուն") {
                        fill("#737373");
                    }
                }
                else if (matrix[i][j] == 6) {
                    fill("#c78383");
                }
                else if (data.weather == "Աշուն") {
                    fill("#996363");
                }
                else if (data.weather == "Ձմեռ") {
                    fill("#734949");
                }
                else if (data.weather == "Գարուն") {
                    fill("#523333");
                }
                else if (matrix[i][j] == 7) {
                    if (data.weather == "Ամառ") {
                        fill("#ac45d1");
                    }
                    else if (data.weather == "Աշուն") {
                        fill("#752e8f");
                    }
                    else if (data.weather == "Ձմեռ") {
                        fill("#502161");
                    }
                    else if (data.weather == "Գարուն") {
                        fill("#381345");
                    }
                }
                rect(j * side, i * side, side, side);
            }
        }
    }
}