````markdown
# TypeScript Learning for Angular

Hello everyone,

I am learning TypeScript for Angular and will be documenting all the knowledge I gain as I progress. Join me on this exciting journey as we dive into the world of TypeScript together!

## 📚 Topics Covered

### 🛠️ Installing TypeScript

To install TypeScript globally using npm, run:

```jsx
$ npm install -g typescript
```
````

### 📝 Checking TypeScript Version

To verify the installed TypeScript version, use:

```jsx
$ tsc --version
```

### 🔄 Compiling TypeScript Code

To compile a TypeScript file into JavaScript, use:

```jsx
$ tsc file_name.tsc
```

This creates a corresponding JS file. The same can be achieved by using **_ng serve_**.

Every JavaScript Code is a valid TypeScript Code.

### 🖋️ Variable Declaration in TypeScript

We can use `let` or `var` for variable declarations.

The problem with `var` is that it does not confine the variable to the loop scope, whereas `let` does.

```tsx
function doSomething() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log(`Finally: ${i}`);
}

doSomething();
```

![Scope Example](https://prod-files-secure.s3.us-west-2.amazonaws.com/313735ab-d5d4-4f98-a8fa-9867d801f519/e6004fdf-b881-4b60-b9bf-4bcf00570b08/Untitled.png)

Variables declared with `var` are scoped to the nearest function, while `let` is scoped to the nearest block of code.

### 📊 Different Data Types

In TypeScript, we have various data types including:

1. number
2. string
3. void
4. any
5. boolean
6. number array
7. any array

Type annotations are used to define the variable data type:

```jsx
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3, 4];
let f: any[] = [];
```

### 🎨 Enum in TypeScript

Enums are used to define a set of named constants:

```tsx
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {
  Red,
  Green,
  Blue,
}

let backgroundColor = Color.Red;
```

First item of Color is given value 0 (Red), similarly value 1 (Green), and value 2 (Blue). This is an incremented value.

### 🔍 Type Assertion

Type assertion allows you to set the type of a variable explicitly:

```tsx
let msg;
msg = "abc";
let endsWithC = (<string>msg).endsWith("c");

let alternativeWay = (msg as string).endsWith("c");

console.log(endsWithC, alternativeWay);
```

### ⚡ Arrow Functions

Arrow functions are used for writing concise function expressions:

```tsx
let doLog = (msg: any) => {
  console.log(msg);
};

doLog(123);
```

### ✍️ Inline Annotations

Inline annotations are used to define the structure of a custom object:

```tsx
let drawPoint = (point: { x: number; y: number }) => {
  //...
};

drawPoint({
  x: 1,
  y: 1,
});
```

### 🧩 Interfaces

Interfaces are used to define the shape of an object:

```tsx
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

### 🏷️ Classes in TypeScript

Classes are used to create objects with properties and methods:

```tsx
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
```

Objects are instances of classes.

### 🚀 Constructors

Constructors are methods called when creating an instance of a class:

```tsx
class NotPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }

  getDistance() {
    //...
  }
}

let point = new NotPoint(1, 2);
point.draw();
```

### 🎛️ Optional Parameters

Optional parameters can be set in constructors:

```tsx
class NotPoint {
  x: number;
  y: number;

  constructor(x?: number, y?: number) {
    this.x = x !== undefined ? x : 0;
    this.y = y !== undefined ? y : 0;
  }

  draw() {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }

  getDistance() {
    //...
  }
}

let point = new NotPoint();
point.draw();
```

### 🔒 Access Modifiers

Access modifiers restrict the access to class members:

1. **public** (default)
2. **private**
3. **protected**

```tsx
class NotPoint {
  private x: number;
  y: number;

  constructor(x?: number, y?: number) {
    this.x = x !== undefined ? x : 0;
    this.y = y !== undefined ? y : 0;
  }

  draw() {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }

  getDistance() {
    //...
  }
}
```

A more concise way:

```tsx
class NotPoint {
  constructor(private x?: number, private y?: number) {}

  draw() {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }

  getDistance() {
    //...
  }
}
```

### 🏷️ Properties

Getters and setters allow controlled access to class properties:

```tsx
class NotPoint {
  constructor(private x?: number, private y?: number) {}

  draw() {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }

  get X() {
    return this.x;
  }

  set X(value: number) {
    if (value < 0) {
      throw new Error("Value cannot be less than 0");
    } else {
      this.x = value;
    }
  }
}
```

### 📦 Modules

Modules allow exporting and importing classes and other components:

```tsx
export class NotPoint {
  constructor(private x?: number, private y?: number) {}

  draw() {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }

  get X() {
    return this.x;
  }

  set X(value: number) {
    if (value < 0) {
      throw new Error("Value cannot be less than 0");
    } else {
      this.x = value;
    }
  }
}
```

```jsx
import { NotPoint } from "./point";
```

## 👋 Welcome to Discussions!

We’re using Discussions as a place to connect with other members of our community. We hope that you:

- Ask questions you’re wondering about.
- Share ideas.
- Engage with other community members.
- Welcome others and are open-minded. Remember that this is a community we build together 💪.

To get started, comment below with an introduction of yourself and tell us about what you do with this community.

<!--
  For the maintainers:

  📢 **Announce to your community** that Discussions is available! Spread the word through tweets, posts, or links on your website to drive traffic here.

  🔗 If you use issue templates, **link relevant templates** such as questions and discussions to Discussions. This helps streamline community engagement and keep issues focused on bugs and feature requests.

  ➡️ **Convert issues to discussions** individually or in bulk by labeling them appropriately. For example, issues labeled "question" or "discussion" can be moved here to encourage broader community participation.
-->

```

```
