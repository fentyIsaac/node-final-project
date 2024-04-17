---
title: Web Arial Attributes, and JSOP
author: Isaac Fenty
---

### What Is Web Accessibility?

Web accessibility is about designing websites for people with disabilities, enabling them to use websites optimally. Common disabilities include:

- Auditory
- Physical
- Speech
- Visual
- Neurological

---

### Why Is Web Accessibility Important?

As web programmers, we can implement various accessibility options such as alt text for images, keyboard input, and transcripts for audio. By incorporating these designs, we enhance the quality of life for impaired individuals.

---

### What Are Aria Attributes?

Aria attributes are elements that extend beyond the native HTML language, allowing designers to create "widgets" or specify states and properties with native HTML features. Below are examples of aria attributes and their usefulness:

---
#### Examples Of Aria Attributes:

1. **Link with `aria-disabled`**

    ```html
    <a role="link" aria-disabled="true">...</a>
    ```

    This code marks a hyperlink as disabled, informing assistive technologies that it is not clickable.

2. **Button with `aria-pressed`**

    ```html
    <button aria-pressed="true">...</button>
    ```

    This attribute indicates to assistive technologies that the button is pressed, allowing for enhanced accessibility options.

3. **`aria-label` for Navigation**

    ```html
    <header>
        <a href="#main" class="skip">Skip to main content</a>
    </header>
    <main id="main">
    ```

    The `aria-label` attribute enhances accessibility for users with low vision by providing descriptive navigation labels.

---

### JavaScript Object Prototypes (JSOP)

JSOP (JavaScript Object Prototype) is a collection of properties making up an object. Every object in JS has built-in properties by default. However, creating custom JSOPs can be powerful. JSOP serves as the "parent" of objects that are called with its parameters.

---
### Examples of JSOP:


```javascript
// Car prototype
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.start = function() {
    console.log('Starting the ' + this.make + ' ' + this.model);
};

var car1 = new Car('Rolls', 'Royce', 2024);
car1.start();

// Person prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
};

var person1 = new Person('Isaac', 20);
person1.sayHello();

// Food prototype
function Food(name, type) {
    this.name = name;
    this.type = type;
}

Food.prototype.describe = function() {
    console.log('This is a ' + this.type + ' called ' + this.name);
};

var food1 = new Food('Pasta', 'dish');
var food2 = new Food('Orange', 'fruit');

food1.describe();
food2.describe();
```
---
## Recap:

If you have ever taken Java before this should look very simmilar. Everything in this code is quite basic, but I want to draw your attention to the .prototype method for these examples, and the rest following. When the .prototype is added we make a "preset" for every object with the Car properties. So this is where thing's start to get "serious", because we can create powerful prototypes that can handle alot of code for us automatically.

    So let's break all these examples down, as I tried to create ones as simmilar as possible to train your brain to see it piece-by-piece.

    1. We Create a prototype that we want other objects to inherit from this is our "parent", any objects that inherit this prototype is a "child".

    2. Creating a method is arguably the most important, as this tells the code what to do when parameters have been met, and it has been given the "Green Light". So for us in these examples, we just used a simple console.log() and use concation to print what properties we want from the prototype

    3. We need instances of an Object to inherit from the prototype. In our Case we used 2 parameters for every prototype (this will vary depending on what you are trying to do.)

    4. Lastly, we call the function attached to the protoype on our instantied objects this allowing the program to say "Okay I have what I need let me work". Thus, when we call our method on our examples we get our Object and it's DEFINED properties.

    
    
    This is what makes JSOP so powerful is we can create one big protoype, and then create methods for it. To be used on a whole heap of objects in the future within our code blocks.

    As said before, JS will have it's own JSOP built in it is not reccomend to tweak these (unless you know what you are doing)
---




### Links For Aria Attributes:
- [W3C HTML Aria Specifications](https://www.w3.org/TR/html-aria/)
- [OpenClassrooms - Improve HTML with ARIA Attributes](https://openclassrooms.com/en/courses/6663461-code-an-accessible-website-in-html-css/7119811-improve-your-html-with-aria-attributes)
- [W3Schools - Accessibility and Screen Readers](https://www.w3schools.com/accessibility/accessibility_screen_readers.php)
- [W3C Web Accessibility Initiative - Introduction to Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
- [Aditus - ARIA Label Guide](https://www.aditus.io/aria/aria-label/)


----


### Links For JSOP:
- [Mozilla Developer Network - Object Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [W3Schools - JavaScript Object Prototypes](https://www.w3schools.com/js/js_object_prototypes.asp)
- [W3Schools - JavaScript Array Prototype Reference](https://w3schools.sinsixx.com/jsref/jsref_prototype_array.asp.htm)


