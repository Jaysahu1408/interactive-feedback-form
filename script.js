let form = document.querySelector("form")
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let feedback = document.querySelector("#feedback");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    let nameerror = document.querySelector("#nameError");
    let emailerror = document.querySelector("#emailError");
    let feedbackerror = document.querySelector("#feedbackError");

    nameerror.textContent = "";
    emailerror.textContent = "";
    feedbackerror.textContent = "";

    const nameRegex = /^[A-Za-z ]{3,50}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    const feedbackRegex = /^.{20,}$/s;

    let nameans = nameRegex.test(name.value);
    let emailans = emailRegex.test(email.value);
    let feedbackans = feedbackRegex.test(feedback.value);


    let isvalid = true;

    if (name.value.length === 0) {
        nameerror.textContent = "Name is required.";
        name.style.borderColor = "red";
        isvalid = false;
    } else if (!nameans) {
        nameerror.textContent = "Name must be at least 3 characters.";
        name.style.borderColor = "red";
        isvalid = false;
    } else {
        name.style.borderColor = "green";
    }

    if (email.value.length === 0) {
        emailerror.textContent = "Email is required.";
        email.style.borderColor = "red";
        isvalid = false;
    } else if (!emailans) {
        emailerror.textContent = "Invalid email address.";
        email.style.borderColor = "red";
        isvalid = false;
    } else {
        email.style.borderColor = "green";
    }

    if (feedback.value.length === 0) {
        feedbackerror.textContent = "Feedback is required.";
        feedback.style.borderColor = "red";
        isvalid = false;
    } else if (!feedbackans) {
        feedbackerror.textContent = "Feedback must be at least 20 characters.";
        feedback.style.borderColor = "red";
        isvalid = false;
    } else {
        feedback.style.borderColor = "green";
    }

    if (isvalid === true) {
        document.querySelector("#successMessage").textContent = "Feedback submitted successfully!";
    }
});