---

# TypeScript Learning for Angular

Hello everyone,

I am learning TypeScript for Angular and will be documenting all the knowledge I gain as I progress. Join me on this exciting journey as we dive into the world of TypeScript together!

## Topics Covered

### 🛠️ Installing TypeScript
Instructions on how to install TypeScript using npm. Let's get our tools ready!

```bash
$ npm install -g typescript
```

### 📝 Checking TypeScript Version
Commands to verify the installed TypeScript version. Keeping track of versions like a pro!

```bash
$ tsc --version
```

### 🔄 Compiling TypeScript Code
How to compile TypeScript files into JavaScript. Watch your code transform!

```bash
$ tsc file_name.ts
```
It creates a corresponding JS file. The same can be done by using `ng serve`.

### 🖋️ Variable Declaration in TypeScript
Understanding the use of `let` and `var` for variable declarations. Let's get our variables in order!

We can use `let` or `var`. The problem with `var` is that variables declared in a loop are not confined to that loop. Hence, we use `let`.

```typescript
function doSomething() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(`Finally: ${i}`);
}
doSomething();
```

Variables declared with `var` are scoped to the nearest function, whereas `let` is scoped to the nearest block of code.

### 📊 Different Data Types
Overview of various data types available in TypeScript, such as `number`, `string`, `boolean`, `any`, `void`, `number array`, and `any array`. Explore the variety!

We use type annotations to define the variable data type.

```typescript
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3, 4];
let f: any[] = [];
```

### 🎨 Enum in TypeScript
Explanation of Enums for defining a set of named constants. Adding colors to our code!

```typescript
enum Color {
  Red,
  Green,
  Blue,
}
let backgroundColor = Color.Red;
```

Enums start with a value of 0 and increment by 1 for each subsequent value. This can also be explicitly declared.

```typescript
enum Color {
  Red = 0,
  Green = 1,
  Blue = 2,
  Purple = 3,
}
```

### 🔍 Type Assertion
Techniques to explicitly specify a variable's type. Unleash the power of type assertions!

```typescript
let msg;
msg = "abc";
let endsWithC = (<string>msg).endsWith("c");
let alternativeWay = (msg as string).endsWith("c");
console.log(endsWithC, alternativeWay);
```

### ⚡ Arrow Functions
Introduction to arrow functions for writing concise function expressions. Lightning-fast functions ahead!

```typescript
let doLog = (msg: any) => {
  console.log(msg);
};
doLog(123);
```

### ✍️ Inline Annotations
How to annotate variable types inline within functions. Keeping our code neat and tidy!

```typescript
let drawPoint = (point: { x: number; y: number }) => {
  //...
};
drawPoint({
  x: 1,
  y: 1,
});
```
Inline annotations are not suitable for complex types.

### 🧩 Interfaces
Using interfaces to define the structure of objects. Building strong foundations!

```typescript
interface Point {
  x: number;
  y: number;
}
let drawPoint = (point: Point) => {
  //...
};
drawPoint({
  x: 1,
  y: 1,
});
```

Using interfaces, we define the shape of a point object. 

### 🏷️ Classes in TypeScript
Introduction to classes, fields, and methods in TypeScript. Embrace the power of OOP!

```typescript
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

let point = new Point();
point.x = 1;
point.y = 2;
point.draw();
```

Classes encapsulate variables (fields) and functions (methods) to work with those variables.

---

Stay tuned for more updates as I continue to learn and share my progress. Let's make learning TypeScript a fun and rewarding experience together!

---
