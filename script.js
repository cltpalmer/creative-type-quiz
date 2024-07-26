document.getElementById('quiz-form').onsubmit = function(event) {
    event.preventDefault();

    let isValid = true;
    let questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        let inputs = question.querySelectorAll('input[type="radio"]');
        let isAnswered = Array.from(inputs).some(input => input.checked);
        if (!isAnswered) {
            isValid = false;
        }
    });

    if (!isValid) {
        document.getElementById('popup').style.display = 'block';
        return;
    }

    let scores = {
        Explorer: 0,
        Dreamer: 0,
        Realist: 0,
        Innovator: 0
    };

    let answers = document.querySelectorAll('input[type="radio"]:checked');
    answers.forEach(answer => {
        scores[answer.value]++;
    });

    let maxScore = 0;
    let resultCategory = '';
    for (let category in scores) {
        if (scores[category] > maxScore) {
            maxScore = scores[category];
            resultCategory = category;
        }
    }

    document.getElementById('result').textContent = `Your creative style is: ${resultCategory}`;
};

document.getElementById('close-popup').onclick = function() {
    document.getElementById('popup').style.display = 'none';
};
