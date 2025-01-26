function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById("feedback");

    if (!selectedOption) {
        // No option selected
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "red";
        return;
    }

    const userAnswer = selectedOption.value;

    // Check if the answer is correct
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again.";
        feedback.style.color = "red";
    }
}

// Add event listener to the Submit Answer button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);