document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');
    const nextButtons = document.querySelectorAll('.next-button');
    const submitButton = document.getElementById('submit-button');
    let currentQuestionIndex = 0;

    function showQuestion(index) {
        questions.forEach((question, i) => {
            question.style.display = i === index ? 'block' : 'none';
        });
    }

    nextButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            const inputs = questions[index].querySelectorAll('input[type="radio"]');
            const isAnswered = Array.from(inputs).some(input => input.checked);
            if (!isAnswered) {
                document.getElementById('popup').style.display = 'block';
                return;
            }
            showQuestion(index + 1);
        });
    });

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        console.log('Submit button clicked'); // Debug log

        const inputs = questions[currentQuestionIndex].querySelectorAll('input[type="radio"]');
        const isAnswered = Array.from(inputs).some(input => input.checked);
        if (!isAnswered) {
            document.getElementById('popup').style.display = 'block';
            return;
        }

        let scores = {
            Explorer: 0,
            Dreamer: 0,
            Realist: 0,
            Innovator: 0
        };

        const answers = document.querySelectorAll('input[type="radio"]:checked');
        answers.forEach(answer => {
            scores[answer.value]++;
        });

        console.log('Scores:', scores); // Debug log

        let maxScore = 0;
        let resultCategory = '';
        for (let category in scores) {
            if (scores[category] > maxScore) {
                maxScore = scores[category];
                resultCategory = category;
            }
        }

        console.log('Result Category:', resultCategory); // Debug log

        const resultElement = document.getElementById('result');
        resultElement.textContent = `Your creative style is: ${resultCategory}`;
        resultElement.style.color = 'red';
        document.getElementById('result-container').style.display = 'block';
        document.getElementById('quiz-container').style.display = 'none';
    });

    document.getElementById('close-popup').onclick = function () {
        document.getElementById('popup').style.display = 'none';
    };

    showQuestion(currentQuestionIndex);
});
