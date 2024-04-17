---
title: Mouse Events (MouseOver, MouseEnter, MouseLeave)
author: Isaac Fenty
---

In these code samples, you will be able to oberseve the changes of different events. Using the mouse events. 
in a web page:
1. **MouseOver**
1. **MouseEnter**
1. **MouseLeave**

There are a lot of different mouse events, but I decided to pick the ones that are more than likely the most common used on websites. 

Below are some different resources that I used to refer back to when making these code samples.

- [https://www.youtube.com/watch?v=g_vXSKbfUiQ&t=242s](https://www.youtube.com/watch?v=g_vXSKbfUiQ&t=242s)
- [https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseover_addeventlistener](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseover_addeventlistener)
- [https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseenter_addeventlistener](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseenter_addeventlistener)






The starting code will ne provided below but (create 3 file's named **index.html**, **index.js**, and **styles.css** and paste the corresponding in it)

### Note: You will be creating the index.js code as you follow along, but make sure to still make a seperate file with the name "index.js".

```html 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <h1 id="sample">Put the mouse over this text</h1>

    <div id="thisCookieBox">
        Chocolate Cookie 🍪
    </div>

    <button id = "myButton">Try the cookie</button>

    <script src="index.js"></script>
</body>
</html>
```

```css
#thisCookieBox{
    background-color: rgb(210, 255, 127);

    width: 300px;
    height: 300px;
    font-size: 4.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-align: center;
}

#myButton{
    font-size: 3rem;
}
```
Before we start: we will be utilzing the divs consiting of (**sample**, **thisCookieBox**, and **myButton**.)
Make sure you have all the divs formatted and spelled correctly.

After this code demonstartion you will be able to observe the following: (color change of the box and image, color change of entering and leaving an element)


Moving forward, you will need to initalize the following varibles:

## Note: We will need to get a handle on each div, in this code we will use the document.getElementById
---

```js
const thisCookieBox = document.getElementById("thisCookieBox");
const myButton = document.getElementById("myButton");
``` 

## Next we will create the event listener.
```js
myButton.addEventListener("click", event =>{
    thisCookieBox.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 🤕";
});
```
We are not done yet, but we have added the event listner to look for a "click" change of **thisCookieBox**. When **myButton** is "clicked"
it will change the color of **thisCookieBox**.

## Now we need to add our "mouseOver event" follow the code below.


```js
myButton.addEventListener("mouseover", event =>{
    thisCookieBox.style.backgroundColor = "green";
    event.target.textContent = "Go ahead eat me! 🤕";

});
```
Now when the mouse is over **myButton** the background color and text will change to our corresponding properties. 

Next we will add our mouseOut event to allow the element to revert to previous properties, when the mouse is no longer over **myButton**.

## Add the following code below:
```js
myButton.addEventListener("mouseout", event =>{
    thisCookieBox.style.backgroundColor = "red";
    event.target.textContent = "Rude 😠";
});
```

We are now finished with our mouseOver and mouseOut events. You should be able to see the changes, when clicking **myButton** and hovering over **myButton**
See what happens when you click it!




Now, lets move onto the mouseEnter and mouseLeave events. We will be utilzing the **sample** div id. As well as using the document.getElementById method. 
```js
document.getElementById("sample").onmouseenter = function() {mouseEnter()};
document.getElementById("sample").onmouseleave = function() {mouseLeave()};
```
This will allow the mouse to listen for an enter event. We are creating functions that will be invoked when the correct event is read.
In our case it would be "onmouseenter" and "onmouseleave".

Moving forward we will write, what we want to happen with the **sample** div when the functions are invoked.

## Follow the code below:

```js
function mouseEnter() {
  document.getElementById("sample").style.color = "red";
}

```

Now when the event of mouseEnter is correctly listened for, it will pull the div **sample** and change the color to red.

```js

function mouseLeave() {
  document.getElementById("sample").style.color = "black";
}

```
Now the event of mouseLeave is created, so when the div **sample** is left. It will change to a black color.



### We are now done! If you run the code you will be able to see all the changes in action.







