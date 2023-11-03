// script.js
document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculateAge);
});

function calculateAge() {
    const dobInput = document.getElementById("dob");
    const result = document.getElementById("result");
    const dobValue = dobInput.value;

    if (!dobValue) {
        result.innerHTML = "Please select a valid date of birth.";
        return;
    }

    const dob = new Date(dobValue);
    const currentDate = new Date();

    if (dob >= currentDate) {
        result.innerHTML = "Invalid Date of Birth. Please select a date in the past.";
        return;
    }

    const ageInMilliseconds = currentDate - dob;
    const ageDate = new Date(ageInMilliseconds);

    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;

    result.innerHTML = `Your age is ${years} years, ${months} months, and ${days} days.`;
}
