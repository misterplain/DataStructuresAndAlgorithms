// When an event occurs on an element, it propagates from the target element
// up to the root of the DOM tree, triggering any event listeners along the way.
// This is called event bubbling.
document.getElementById("child").addEventListener("click", function () {
  console.log("Child Clicked");
});

document.getElementById("parent").addEventListener("click", function () {
  console.log("Parent Clicked");
});

// Clicking the child element will also trigger the parent's click event.

// You can see the order in which events bubble by inspecting the event object's
// `target` and `currentTarget` properties.
document.getElementById("child").addEventListener("click", function (event) {
  console.log("Child Target: " + event.target.id);
  console.log("Child CurrentTarget: " + event.currentTarget.id);
});

document.getElementById("parent").addEventListener("click", function (event) {
  console.log("Parent Target: " + event.target.id);
  console.log("Parent CurrentTarget: " + event.currentTarget.id);
});

// Clicking the child element will log:
// Child Target: child
// Child CurrentTarget: child
// Parent Target: child
// Parent CurrentTarget: parent

// You can stop event propagation using the `stopPropagation` method.
document.getElementById("child").addEventListener("click", function (event) {
  console.log("Child Clicked");
  event.stopPropagation(); // Prevent further propagation
});

document.getElementById("parent").addEventListener("click", function () {
  console.log("Parent Clicked");
});

// Clicking the child element will only log "Child Clicked" and won't trigger the parent's click event.
