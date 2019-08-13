let b = document.getElementById("carogame");
let board = [];
let data = "";

for (let i = 0; i < 5; i++) {
    board[i] = new Array(0, 0, 0, 0, 0);
}
for (let i = 0; i < 5; i++) {
    data += "<br/>";
    for (let j = 0; j < 5; j++) {
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}
data += "<br/><br/>"
b.innerHTML = data;

function changValue1() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "X";
    for (let i = 0; i < 5; i++) {
        data += "<br/>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    data += "<br/><br/>"
    b.innerHTML = "<hr/>" + data;
}
function changValue2() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "*";
    for (let i = 0; i < 5; i++) {
        data += "<br/>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    data += "<br/><br/>"
    b.innerHTML = "<hr/>" + data;
}
