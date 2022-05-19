function myfunc() {

    var 
   a1, a2, a3, a4, a5, a6, a7, a8, a9;
    a1 = document.getElementById("a1").value;
    a2 = document.getElementById("a2").value;
    a3 = document.getElementById("a3").value;
    a4 = document.getElementById("a4").value;
    a5 = document.getElementById("a5").value;
    a6 = document.getElementById("a6").value;
    a7 = document.getElementById("a7").value;
    a8 = document.getElementById("a8").value;
    a9 = document.getElementById("a9").value;

    if ((a1 == 'x' || a1 == 'X') && (a2 == 'x' ||
            a2 == 'X') && (a3 == 'x' || a3 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("a4").disabled = true;
        document.getElementById("a5").disabled = true;
        document.getElementById("a6").disabled = true;
        document.getElementById("a7").disabled = true;
        document.getElementById("a8").disabled = true;
        document.getElementById("a9").disabled = true;
        window.alert('Player X won');
    } else if ((a1 == 'x' || a1 == 'X') && (a4 == 'x' ||
            a4 == 'X') && (a7 == 'x' || a7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("a2").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a5").disabled = true;
        document.getElementById("a6").disabled = true;
        document.getElementById("a8").disabled = true;
        document.getElementById("a9").disabled = true;

        window.alert('Player X won');
    } else if ((a7 == 'x' || a7 == 'X') && (a8 == 'x' ||
            a8 == 'X') && (a9 == 'x' || a9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a2").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a4").disabled = true;
        document.getElementById("a5").disabled = true;
        document.getElementById("a6").disabled = true;
        window.alert('Player X won');
    } else if ((a3 == 'x' || a3 == 'X') && (a6 == 'x' ||
            a6 == 'X') && (a9 == 'x' || a9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a2").disabled = true;
        document.getElementById("a4").disabled = true;
        document.getElementById("a5").disabled = true;
        document.getElementById("a7").disabled = true;
        document.getElementById("a8").disabled = true;
        window.alert('Player X won');
    } else if ((a1 == 'x' || a1 == 'X') && (a5 == 'x' ||
            a5 == 'X') && (a9 == 'x' || a9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("a2").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a4").disabled = true;
        document.getElementById("a6").disabled = true;
        document.getElementById("a7").disabled = true;
        document.getElementById("a8").disabled = true;
        window.alert('Player X won');
    } else if ((a3 == 'x' || a3 == 'X') && (a5 == 'x' ||
            a5 == 'X') && (a7 == 'x' || a7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a2").disabled = true;
        document.getElementById("a4").disabled = true;
        document.getElementById("a6").disabled = true;
        document.getElementById("a8").disabled = true;
        document.getElementById("a9").disabled = true;
        window.alert('Player X won');
    } else if ((a2 == 'x' || a2 == 'X') && (a5 == 'x' ||
            a5 == 'X') && (a8 == 'x' || a8 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a4").disabled = true;
        document.getElementById("a6").disabled = true;
        document.getElementById("a7").disabled = true;
        document.getElementById("a9").disabled = true;
        window.alert('Player X won');
    } else if ((a4 == 'x' || a4 == 'X') && (a5 == 'x' ||
            a5 == 'X') && (a6 == 'x' || a6 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a2").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a7").disabled = true;
        document.getElementById("a8").disabled = true;
        document.getElementById("a9").disabled = true;
        window.alert('Player X won');
    } else if ((a1 == '0' || a1 == '0') && (a2 == '0' ||
            a2 == '0') && (a3 == '0' || a3 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("a4").disabled = true;
        document.getElementById("a5").disabled = true;
        document.getElementById("a6").disabled = true;
        document.getElementById("a7").disabled = true;
        document.getElementById("a8").disabled = true;
        document.getElementById("a9").disabled = true;
        window.alert('Player 0 won');
    } else if ((a1 == '0' || a1 == '0') && (a4 == '0' ||
            a4 == '0') && (a7 == '0' || a7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("a2").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a5").disabled = true;
        document.getElementById("a6").disabled = true;
        document.getElementById("a8").disabled = true;
        document.getElementById("a9").disabled = true;
        window.alert('Player 0 won');
    } else if ((a7 == '0' || a7 == '0') && (a8 == '0' ||
            a8 == '0') && (a9 == '0' || a9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a2").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a4").disabled = true;
        document.getElementById("a5").disabled = true;
        document.getElementById("a6").disabled = true;
        window.alert('Player 0 won');
    } else if ((a3 == '0' || a3 == '0') && (a6 == '0' ||
            a6 == '0') && (a9 == '0' || a9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a2").disabled = true;
        document.getElementById("a4").disabled = true;
        document.getElementById("a5").disabled = true;
        document.getElementById("a7").disabled = true;
        document.getElementById("a8").disabled = true;
        window.alert('Player 0 won');
    } else if ((a1 == '0' || a1 == '0') && (a5 == '0' ||
            a5 == '0') && (a9 == '0' || a9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("a2").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a4").disabled = true;
        document.getElementById("a6").disabled = true;
        document.getElementById("a7").disabled = true;
        document.getElementById("a8").disabled = true;
        window.alert('Player 0 won');
    } else if ((a3 == '0' || a3 == '0') && (a5 == '0' ||
            a5 == '0') && (a7 == '0' || a7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a2").disabled = true;
        document.getElementById("a4").disabled = true;
        document.getElementById("a6").disabled = true;
        document.getElementById("a8").disabled = true;
        document.getElementById("a9").disabled = true;
        window.alert('Player 0 won');
    } else if ((a2 == '0' || a2 == '0') && (a5 == '0' ||
            a5 == '0') && (a8 == '0' || a8 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a4").disabled = true;
        document.getElementById("a6").disabled = true;
        document.getElementById("a7").disabled = true;
        document.getElementById("a9").disabled = true;
        window.alert('Player 0 won');
    } else if ((a4 == '0' || a4 == '0') && (a5 == '0' ||
            a5 == '0') && (a6 == '0' || a6 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("a1").disabled = true;
        document.getElementById("a2").disabled = true;
        document.getElementById("a3").disabled = true;
        document.getElementById("a7").disabled = true;
        document.getElementById("a8").disabled = true;
        document.getElementById("a9").disabled = true;
        window.alert('Player 0 won');
    } else if ((a1 == 'X' || a1 == '0') && (a2 == 'X' ||
            a2 == '0') && (a3 == 'X' || a3 == '0') &&
        (a4 == 'X' || a4 == '0') && (a5 == 'X' ||
            a5 == '0') && (a6 == 'X' || a6 == '0') &&
        (a7 == 'X' || a7 == '0') && (a8 == 'X' ||
            a8 == '0') && (a9 == 'X' || a9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Draw";
        window.alert('Draw');
    } else {


        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Player X Turn";
        } else {
            document.getElementById('print')
                .innerHTML = "Player 0 Turn";
        }
    }
}

// Function to reset game
function myfunc_2() {
    location.reload();
    document.getElementById('a1').value = '';
    document.getElementById("a2").value = '';
    document.getElementById("a3").value = '';
    document.getElementById("a4").value = '';
    document.getElementById("a5").value = '';
    document.getElementById("a6").value = '';
    document.getElementById("a7").value = '';
    document.getElementById("a8").value = '';
    document.getElementById("a9").value = '';

}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;

function myfunc_3() {
    if (flag == 1) {
        document.getElementById("a1").value = "X";
        document.getElementById("a1").disabled = true;
        flag = 0;
    } else {
        document.getElementById("a1").value = "0";
        document.getElementById("a1").disabled = true;
        flag = 1;
    }
}

function myfunc_4() {
    if (flag == 1) {
        document.getElementById("a2").value = "X";
        document.getElementById("a2").disabled = true;
        flag = 0;
    } else {
        document.getElementById("a2").value = "0";
        document.getElementById("a2").disabled = true;
        flag = 1;
    }
}

function myfunc_5() {
    if (flag == 1) {
        document.getElementById("a3").value = "X";
        document.getElementById("a3").disabled = true;
        flag = 0;
    } else {
        document.getElementById("a3").value = "0";
        document.getElementById("a3").disabled = true;
        flag = 1;
    }
}

function myfunc_6() {
    if (flag == 1) {
        document.getElementById("a4").value = "X";
        document.getElementById("a4").disabled = true;
        flag = 0;
    } else {
        document.getElementById("a4").value = "0";
        document.getElementById("a4").disabled = true;
        flag = 1;
    }
}

function myfunc_7() {
    if (flag == 1) {
        document.getElementById("a5").value = "X";
        document.getElementById("a5").disabled = true;
        flag = 0;
    } else {
        document.getElementById("a5").value = "0";
        document.getElementById("a5").disabled = true;
        flag = 1;
    }
}

function myfunc_8() {
    if (flag == 1) {
        document.getElementById("a6").value = "X";
        document.getElementById("a6").disabled = true;
        flag = 0;
    } else {
        document.getElementById("a6").value = "0";
        document.getElementById("a6").disabled = true;
        flag = 1;
    }
}

function myfunc_9() {
    if (flag == 1) {
        document.getElementById("a7").value = "X";
        document.getElementById("a7").disabled = true;
        flag = 0;
    } else {
        document.getElementById("a7").value = "0";
        document.getElementById("a7").disabled = true;
        flag = 1;
    }
}

function myfunc_10() {
    if (flag == 1) {
        document.getElementById("a8").value = "X";
        document.getElementById("a8").disabled = true;
        flag = 0;
    } else {
        document.getElementById("a8").value = "0";
        document.getElementById("a8").disabled = true;
        flag = 1;
    }
}

function myfunc_11() {
    if (flag == 1) {
        document.getElementById("a9").value = "X";
        document.getElementById("a9").disabled = true;
        flag = 0;
    } else {
        document.getElementById("a9").value = "0";
        document.getElementById("a9").disabled = true;
        flag = 1;
    }
}