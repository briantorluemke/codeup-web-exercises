function showMultiplicationTable(x) {
    console.log(x + " x 1 = " + x*1);
    console.log(x + " x 2 = " + x*2);
    console.log(x + " x 3 = " + x*3);
    console.log(x + " x 4 = " + x*4);
    console.log(x + " x 5 = " + x*5);
    console.log(x + " x 6 = " + x*6);
    console.log(x + " x 7 = " + x*7);
    console.log(x + " x 8 = " + x*8);
    console.log(x + " x 9 = " + x*9);
    console.log(x + " x 10 = " + x*10);
}

showMultiplicationTable(7);




function randomNumbers(x) {
    x = Math.floor(Math.random() * 180) + 20;
    x = parseInt(x);
    if (x % 2 === 0) {
        console.log(x + " is even.")
    } else {
        console.log(x + " is odd.")
    }
}



for (var y = 1; y <= 10; y++) {
    randomNumbers();
}


for (var x = 1; x < 10; x++) {
    if (x === 1) {
        console.log(1);
    }
    if (x === 2) {
        console.log(22);
    }
    if (x === 3) {
        console.log(333);
    }
    if (x === 4) {
        console.log(4444);
    }
    if (x === 5) {
        console.log(55555);
    }
    if (x === 6) {
        console.log(666666);
    }
    if (x === 7) {
        console.log(7777777);
    }
    if (x === 8) {
        console.log(88888888);
    }
    if (x === 9) {
        console.log(999999999);
    }
}

for (var x = 20; x > 0; x--) {
    console.log(x*5);
}