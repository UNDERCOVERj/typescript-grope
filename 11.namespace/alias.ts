namespace Shape {
    // 需要导出才能像对象一样访问
    export namespace Poly {
        export class Triangle {}
    }
}

import Triangle = Shape.Poly.Triangle;