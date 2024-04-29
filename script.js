// This is for the Multi level dropdown

// Create function to select elements

// const selectElement = (element) => document.querySelector(element);

// Open and close nav on click

// selectElement('.menu-icons').addEventListener('click'() => {
// selectElement('nav').classList.toggle('active');
// });


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentState = button.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
    }
  });
});