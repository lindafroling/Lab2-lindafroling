function validateForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const question1 = document.getElementById("question1").value;
    const question2 = document.querySelector('input[name="question2"]:checked');
    const question3 = document.querySelectorAll('input[name="question3[]"]:checked');
    const question4 = document.getElementById("question4").value;
    const question5 = document.getElementById("question5").value;

    // Check if required fields are filled
    if (firstName === "" || lastName === "" || email === "" || question1 === "" || question2 === "" || question3 === "" || question4 === "" || question5 === "") {
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("successMessage").style.display = "none";
        return;
    }

    // Check if first name contains numbers
    if (/\d/.test(firstName)) {
        document.getElementById("errorMessage").innerText = "First name cannot contain numbers.";
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("successMessage").style.display = "none";
        return;
    }

    // Check if last name contains numbers
    if (/\d/.test(lastName)) {
        document.getElementById("errorMessage").innerText = "Last name cannot contain numbers.";
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("successMessage").style.display = "none";
        return;
    }

    // Check if email contains '@'
    if (!email.includes("@")) {
        document.getElementById("errorMessage").innerText = "Please enter a valid email address.";
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("successMessage").style.display = "none";
        return;
    }

    // Check if required questions are answered
    if (!question1 || !question2 || !question3 || !question4 || !question5) {
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("successMessage").style.display = "none";
        return;
    }

    // If all validations pass, show success message
    document.getElementById("errorMessage").style.display = "none";
    document.getElementById("successMessage").style.display = "block";
}