// Your code here
// Cat class
class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says meow!`;
  }
}

// Dog class
class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says woof!`;
  }
}

// Bird class
class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    if (this.sex === "male") {
      return `It's me! ${this.name}, the parrot!`;
    } else {
      return `${this.name} says squawk!`;
    }
  }
}

// Example usage:
const cat = new Cat("Mickey", "male");
const dog = new Dog("Pluto", "male");
const bird1 = new Bird("Polly", "female");
const bird2 = new Bird("Peter", "male");

console.log(cat.speak());    // Mickey says meow!
console.log(dog.speak());    // Pluto says woof!
console.log(bird1.speak());  // Polly says squawk!
console.log(bird2.speak());  // It's me! Peter, the parrot!