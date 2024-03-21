class Point{
    private x: number;
    private y: number;

    constructors(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    draw(){
        console.log('X: ' + this.x  + ', Y: ' + this.y);
    }
}

let point = new Point();
// point.x = 1;
// point.y = 2;
point.draw();