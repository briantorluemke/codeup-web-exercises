var x = 2;

while (x <= 65536) {
    console.log(x);
    x = (x * 2);
}




var allCones = Math.floor(Math.random() * 50) + 50;
console.log (allCones);
do {
    var cones = Math.floor(Math.random() * 5) + 1;
    var leftCones = (allCones - cones);
    console.log("Sold " + cones + " cones to this customer!");
    allCones = leftCones;
} while (allCones > 0);

//Pay attention to find out how to change the function when you run
//out of cones or don't have enough

