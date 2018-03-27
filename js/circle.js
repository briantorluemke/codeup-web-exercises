(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            var x = Math.pow(circle.radius, 2);
            return (Math.PI * x);
        },

        logInfo: function (doRounding) {
            if (doRounding) {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(circle.getArea()));
            } else {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + (circle.getArea()));
            }

        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
