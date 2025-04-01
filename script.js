const answerButtons = document.querySelectorAll('.answer');
const questionContainers = document.querySelectorAll('.question-container');
const resultsContainer = document.getElementById('results-container');
const resultsText = document.getElementById('results');
const restartButton = document.getElementById('restart');

let answers = {
    '1': null,
    '2': null,
    '3': null,
    '4': null,
    '5': null,
    '6': null,
    '7': null,
    '8': null,
    '9': null,
    '10': null
};

answerButtons.forEach(button => {
    button.addEventListener('click', () => {
        const questionNumber = button.dataset.question;
        answers[questionNumber] = button.dataset.choice;

        // Hide current question
        document.getElementById(`question${questionNumber}`).style.display = 'none';

        // Show next question or results
        if (questionNumber < 10) {
            document.getElementById(`question${parseInt(questionNumber) + 1}`).style.display = 'block';
        } else {
            showResults();
        }
    });
});

restartButton.addEventListener('click', () => {
    // Reset answers and show the first question
    for (let key in answers) {
        answers[key] = null;
    }
    resultsContainer.style.display = 'none';
    questionContainers.forEach(container => container.style.display = 'none');
    document.getElementById('question1').style.display = 'block';
});

function showResults() {
    resultsContainer.style.display = 'block';
    let counts = { a: 0, b: 0, c: 0, d: 0, e: 0 };
    for (let key in answers) {
        if (answers[key]) {
            counts[answers[key]]++;
        }
    }

    let resultKey = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    let resultText = getResultText(resultKey);
    resultsText.textContent = resultText;
}

function getResultText(key) {
    switch (key) {
        case 'a':
            return "You'd thrive in a school with a strong athletics program like Bulkeley or Hartford Public High!";
        case 'b':
            return "You should check out schools with strong STEM programs!";
        case 'c':
            return "A school with a focus on Performing Arts would be a great fit!";
        case 'd':
            return "You might excel in a school with a Social Justice focus or a strong sense of community.";
        case 'e':
            return "Consider schools with a technology focus or career/technical education.";
        default:
            return "It's hard to say! Explore all your options.";
    }
}