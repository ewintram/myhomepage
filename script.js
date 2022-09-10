/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen

================
*/


let colours = ["red", "blue", "green", "yellow"];
let i = 0;

setInterval(() => {
  if (i < colours.length) {
    console.log(colours[i]);
    document.querySelector("#main").style.backgroundColor = colours[i];
    i++;
  }
}, 1000);