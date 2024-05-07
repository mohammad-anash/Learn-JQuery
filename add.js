// how to select element in jQuery

// $ sign in jQuery => In jQuery, the $ is a shorthand alias for the jQuery object, used to reference jQuery functions and methods efficiently.

// There are three main typed of selector in jQuery
// 1. => Element Selector
// 2. => class Selector
// 3. => id Selector

// Eelement Selector Example
const paragraph = $("p");
console.log(paragraph);

// Class Selector Example
const container = $(".container");
console.log(container);
// Note => whenever you select class is jquery write . beforre class name;

// Id Selector Example
const button = $("#btn");
console.log(button);

// Events in jQuery

// mouse Event => click, dbclick, mouseenter, mouseLeave;
// keyBaord Event => keydown, keyup, keyPress,
// form Event => submit, change, focus, blur

// click Example
// button.click(() => console.log("button click"));

// dblClick Example =>
// button.dblclick(() => console.log("you click two time"));

// mouseEnter Example =>
// button.mouseenter(() => console.log("mouse is enter"))

// mouseLeave Example =>
// button.mouseleave(() => console.log("mouse is leave"))

// KeyBoard Events

// keydown Example =>
// button.keydown(() => console.log("key"));

// keypress Example =>
// button.keypress(() => console.log("key"));

// keyup Example =>
// button.keyup(() => console.log("key"));

// hide and show methods in jauery

// hide methos Example => container.hide();
// Show methos Example => container.Show()

// how to add multiple event on one element

// see Example

// button.on({
//   click: function () {
//     console.log("click");
//   },

//   mouseleave: function () {
//     console.log("mouseleave");
//   },
// });

// write a task when you click on button then hide container, and when you dblclick on button then show container

// button.on({
//   click: function () {
//     container.hide();
//   },
//   dblclick: function(){
//     container.show()
//   }
// });

// get text in JQuery;
const getText = paragraph.text();
console.log(getText);

// val function in jQuery
// if you want to get input value then use val function in jQuery

const input = $("#input");
button.click(function () {
  console.log(input.val());
});

// find method in JQuery
// The find() is an inbuilt method in jQuery which is used to find all the descendant elements of the selected element. It will traverse all the way down to the last leaf of the selected element in the DOM tree.
console.log(container.find(paragraph));

// prop method in jQuery
// the prop method is help to access attribute and properties

//  Example
// get input type attribute
const getAttribute = input.prop("type", "number")
console.log(getAttribute)

// set checked property on input
const setProperty = input.prop("placeholder", "write something");
console.log(setProperty)