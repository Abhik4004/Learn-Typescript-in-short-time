let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3, 4];
let f: any[] = [];

//Group of related constants

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum color {
  Red = 0,
  Green = 1,
  Blue = 2,
  Purple = 3,
}

let backgroundColor = color.Red;

//Type assertion

let msg;
msg = "abc";
let endsWithC = (<string>msg).endsWith("c");

let alternativeWay = (msg as string).endsWith("c");

console.log(endsWithC, alternativeWay);

// Arrow Function
let doLog = (msg: any) => {
  console.log(msg);
};

doLog(123);

//Custom Types
class Point {
  x: number;
  y: number;
  draw() {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }

  getDistance() {
    //...
  }
}

let checking = new Point();
checking.x = 1;
checking.y = 2;
checking.draw();
