# Prototype Decorator

This project made because right now the `class initializing` spec it unclear and both in the current spec there is a missing key of what happen when you need to initialize a `propery` for using it with `super class constructor`. However when the environment isn't set to `production`, it will throw if you override existing `property` of the class.

## Installing

```sh
npm install prototype-decorator
```

## How to use

```js
import prototype from 'prototype-decorator';


class Parent {
  constructor() {
    console.log(this.hello);
  }
}

@prototype({ hello: "hello world!" })
class Child extends Parent {}

new Child(); // log: hello world!

```
