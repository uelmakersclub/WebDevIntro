// function callled whenever user tab on anybox is clicked

function myFunction() {
    // setting DOM to all boxes or input feild
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    // creating the gird of 3x3
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;
    // creating the grid buttons    
    var b1btn, b2btn, b3btn, b4btn, b5btn, b6btn, b7btn, b8btn, b9btn;
    
    b1btn = document.getElementById("b1");
    b2btn = document.getElementById("b2");
    b3btn = document.getElementById("b3");
    b4btn = document.getElementById("b4");
    b5btn = document.getElementById("b5");
    b6btn = document.getElementById("b6");
    b7btn = document.getElementById("b7");
    b8btn = document.getElementById("b8");
    b9btn = document.getElementById("b9");
// checking if player X won or if player Y won

// note this is turnary operator
// if ((b1 == 'X' || b1 == 'O') && b1 == b2 && b1 == b3) {
//     alert(b1 + " is the winner");
//     b1btn.style.backgroundColor = "yellow";
//     b2btn.style.backgroundColor = "yellow";
//     b3btn.style.backgroundColor = "yellow";
//     return;
// }
if ((b1 == 'X' || b1 == 'O') && (b2 == 'X' || b2 == 'O') && (b3 == 'X' || b3 == 'O') {
    document.getElementById('Print')
    .innerHTML = "Player X is the winner";
    b3btn = button.disabled = true;
    b4btn = button.disabled = true;
    b5btn = button.disabled = true;
    b6btn = button.disabled = true;
    b7btn = button.disabled = true;
    b8btn = button.disabled = true;
    b9btn = button.disabled = true;

    b1btn.style.backgroundColor = "yellow";
    b2btn.style.backgroundColor = "yellow";
    b3btn.style.backgroundColor = "yellow";
}
else if ((b4 == 'X' || b4 == 'O') && (b5 == 'X' || b5 == 'O') && (b6 == 'X' || b6 == 'O') {
    document.getElementById('Print')
    .innerHTML = "Player X is the winner";
    b1btn = button.disabled = true;
    b2btn = button.disabled = true;
    b3btn = button.disabled = true;
    b6btn = button.disabled = true;
    b7btn = button.disabled = true;
    b8btn = button.disabled = true;
    b9btn = button.disabled = true;

    b4btn.style.backgroundColor = "yellow";
    b5btn.style.backgroundColor = "yellow";
    b6btn.style.backgroundColor = "yellow";
}
else if ((b7 == 'X' || b7 == 'O') && (b8 == 'X' || b8 == 'O') && (b9 == 'X' || b9 == 'O') {
    document.getElementById('Print')
    .innerHTML = "Player X is the winner";
    b1btn = button.disabled = true;
    b2btn = button.disabled = true;
    b3btn = button.disabled = true;
    b4btn = button.disabled = true;
    b5btn = button.disabled = true;
    b6btn = button.disabled = true;

    b7btn.style.backgroundColor = "yellow";
    b8btn.style.backgroundColor = "yellow";
    b9btn.style.backgroundColor = "yellow";
}
else if ((b1 == 'X' || b1 == 'O') && (b4 == 'X' || b4 == 'O') && (b7 == 'X' || b7 == 'O') {
    document.getElementById('Print')
    .innerHTML = "Player X is the winner";
    b2btn = button.disabled = true;
    b3btn = button.disabled = true;
    b5btn = button.disabled = true;
    b6btn = button.disabled = true;
    b8btn = button.disabled = true;
    b9btn = button.disabled = true;

    b1btn.style.backgroundColor = "yellow";
    b4btn.style.backgroundColor = "yellow";
    b7btn.style.backgroundColor = "yellow";
}
else if ((b2 == 'X' || b2 == 'O') && (b5 == 'X' || b5 == 'O') && (b8 == 'X' || b8 == 'O') {
    document.getElementById('Print')
    .innerHTML = "Player X is the winner";
    b1btn = button.disabled = true;
    b3btn = button.disabled = true;
    b4btn = button.disabled = true;
    b6btn = button.disabled = true;
    b7btn = button.disabled = true;
    b9btn = button.disabled = true;

    b2btn.style.backgroundColor = "yellow";
    b5btn.style.backgroundColor = "yellow";
    b8btn.style.backgroundColor = "yellow";
}
else if ((b3 == 'X' || b3 == 'O') && (b6 == 'X' || b6 == 'O') && (b9 == 'X' || b9 == 'O') {
    document.getElementById('Print')
    .innerHTML = "Player X is the winner";
    b1btn = button.disabled = true;
    b2btn = button.disabled = true;
    b4btn = button.disabled = true;
    b5btn = button.disabled = true;
    b7btn = button.disabled = true;
    b8btn = button.disabled = true;

    b3btn.style.backgroundColor = "yellow";
    b6btn.style.backgroundColor = "yellow";
    b9btn.style.backgroundColor = "yellow";
}
else if((b1 == 'X' || b1 == 'O') && (b5 == 'X' || b5 == 'O') && (b9 == 'X' || b9 == 'O') {
    document.getElementById('Print')
    .innerHTML = "Player X is the winner";
    b2btn = button.disabled = true;
    b3btn = button.disabled = true;
    b4btn = button.disabled = true;
    b6btn = button.disabled = true;
    b7btn = button.disabled = true;
    b8btn = button.disabled = true;

    b1btn.style.backgroundColor = "yellow";
    b5btn.style.backgroundColor = "yellow";
    b9btn.style.backgroundColor = "yellow";
}
else if((b3 == 'X' || b3 == 'O') && (b5 == 'X' || b5 == 'O') && (b7 == 'X' || b7 == 'O') {
    document.getElementById('Print')
    .innerHTML = "Player X is the winner";
    b1btn = button.disabled = true;
    b2btn = button.disabled = true;
    b4btn = button.disabled = true;
    b6btn = button.disabled = true;
    b8btn = button.disabled = true;
    b9btn = button.disabled = true;

    b3btn.style.backgroundColor = "yellow";
    b5btn.style.backgroundColor = "yellow";
    b7btn.style.backgroundColor = "yellow";
}
)

}