document.getElementById('quiz-form').onsubmit = function(event) {
    event.preventDefault();
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
