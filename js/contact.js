// document
//   .getElementById("contactForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     let isValid = true;
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const subject = document.getElementById("subject").value;
//     const message = document.getElementById("message").value;

//     // Validate Name
//     if (name.length < 5) {
//       document.getElementById("nameError").innerText =
//         "Name must be at least 5 characters long";
//       isValid = false;
//     } else {
//       document.getElementById("nameError").innerText = "";
//     }

//     // Validate Email
//     if (!/\S+@\S+\.\S+/.test(email)) {
//       document.getElementById("emailError").innerText =
//         "Please enter a valid email address";
//       isValid = false;
//     } else {
//       document.getElementById("emailError").innerText = "";
//     }

//     // Validate Subject
//     if (subject.length < 15) {
//       document.getElementById("subjectError").innerText =
//         "Subject must be more than 15 characters";
//       isValid = false;
//     } else {
//       document.getElementById("subjectError").innerText = "";
//     }

//     // Validate Message
//     if (message.length < 25) {
//       document.getElementById("messageError").innerText =
//         "Message must be more than 25 characters";
//       isValid = false;
//     } else {
//       document.getElementById("messageError").innerText = "";
//     }

//     if (isValid) {
//       // If the form is valid, it can be submitted to the server.
//       console.log(
//         "Form is valid. Send data to server or perform other actions."
//       );
//     }
//   });


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const validateInput = (input, minLength, errorElement, errorMessage) => {
    const value = input.value.trim();
    if (value.length < minLength) {
      errorElement.innerText = errorMessage;
      return false;
    } else {
      errorElement.innerText = "";
      return true;
    }
  };

  const nameValid = validateInput(
    document.getElementById("name"),
    5,
    document.getElementById("nameError"),
    "Name must be at least 5 characters long"
  );

  const emailValid = validateInput(
    document.getElementById("email"),
    1,
    document.getElementById("emailError"),
    "Please enter a valid email address"
  );

  const subjectValid = validateInput(
    document.getElementById("subject"),
    15,
    document.getElementById("subjectError"),
    "Subject must be more than 15 characters"
  );

  const messageValid = validateInput(
    document.getElementById("message"),
    25,
    document.getElementById("messageError"),
    "Message must be more than 25 characters"
  );

  if (nameValid && emailValid && subjectValid && messageValid) {
    console.log("Form is valid. Send data to server or perform other actions.");
  }
});
