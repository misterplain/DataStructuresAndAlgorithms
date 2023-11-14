// By default, event handling in the DOM follows the "bubbling" phase.
// To switch to the "capturing" phase, you need to set the third parameter of
// the `addEventListener` method to `true`.
document.getElementById("child").addEventListener(
  "click",
  function () {
    console.log("Child Clicked");
  },
  true // Use capturing phase
);

document.getElementById("parent").addEventListener(
  "click",
  function () {
    console.log("Parent Clicked");
  },
  true // Use capturing phase
);

// Clicking the child element will trigger the parent's click event first,
// followed by the child's click event.

// You can use capturing phase to capture events as they propagate from the root to the target.
document.getElementById("child").addEventListener(
  "click",
  function () {
    console.log("Child Clicked");
  },
  true // Use capturing phase
);

document.getElementById("parent").addEventListener(
  "click",
  function () {
    console.log("Parent Clicked");
  },
  true // Use capturing phase
);

document.getElementById("grandparent").addEventListener(
  "click",
  function () {
    console.log("Grandparent Clicked");
  },
  true // Use capturing phase
);

// Clicking the child element will log:
// Grandparent Clicked
// Parent Clicked
// Child Clicked

// You can combine capturing and bubbling phases in event handling.
document.getElementById("child").addEventListener(
  "click",
  function () {
    console.log("Child Clicked");
  },
  false // Use bubbling phase
);

document.getElementById("parent").addEventListener(
  "click",
  function () {
    console.log("Parent Clicked");
  },
  true // Use capturing phase
);

document.getElementById("grandparent").addEventListener(
  "click",
  function () {
    console.log("Grandparent Clicked");
  },
  true // Use capturing phase
);

// Clicking the child element will log:
// Grandparent Clicked (capturing)
// Parent Clicked (capturing)
// Child Clicked (bubbling)
