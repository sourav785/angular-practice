interface Point {
    x: number,
    y: number
}

let drawPoints = (point: Point) => {
    //..
 }

 drawPoints({
    x: 1,
    y: 2
 })

 let test: Point = {
    x: 4,
    y: 5
 }

 let sum = test.x + test.y;

 class Point1 {
    public x: number = 0;
    public y: number = 0;

    public sum(): number {
        return this.x + this.y;
    }
 }

 let test1: Point1 = new Point1();
 test1.x = 3;
 test1.y = 5;

 let sum1 = test1.sum();

 let test3: Map<string, Point[]> = new Map()