var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4];
var f = [];
//Group of related constants
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
    color[color["Purple"] = 3] = "Purple";
})(color || (color = {}));
var backgroundColor = color.Red;
//Type assertion
var msg;
msg = "abc";
var endsWithC = msg.endsWith("c");
var alternativeWay = msg.endsWith("c");
console.log(endsWithC, alternativeWay);
// Arrow Function
var doLog = function (msg) {
    console.log(msg);
};
doLog(123);
//Custom Types
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("X: ".concat(this.x, ", Y: ").concat(this.y));
    };
    Point.prototype.getDistance = function () {
        //...
    };
    return Point;
}());
var checking = new Point();
checking.x = 1;
checking.y = 2;
checking.draw();
