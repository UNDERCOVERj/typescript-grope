var Shape;
(function (Shape) {
    var Poly;
    (function (Poly) {
        var Triangle = /** @class */ (function () {
            function Triangle() {
            }
            return Triangle;
        }());
        Poly.Triangle = Triangle;
    })(Poly || (Poly = {}));
})(Shape || (Shape = {}));
var Triangle = Shape.Poly.Triangle;
