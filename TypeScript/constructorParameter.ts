class Point{
    // private x: number;
    // private y: number;

    constructor(private x?: number, private y?: number){

    }

    draw(){
        console.log('X: ' + this.x  + ', Y: ' + this.y);
    }
}

let point = new Point(1, 2);
// point.x = 1;
// point.y = 2;
point.draw();