var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.constructors = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point;
}());
var point = new Point();
// point.x = 1;
// point.y = 2;
point.draw();
