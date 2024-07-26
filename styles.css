function startQuiz() {
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('quiz-screen').style.display = 'block';
  document.getElementById('question-1').style.display = 'block';
}

function showNextQuestion(currentQuestion) {
  document.getElementById(`question-${currentQuestion}`).style.display = 'none';
  document.getElementById(`question-${currentQuestion + 1}`).style.display = 'block';
}

function submitQuiz() {
  const form = document.getElementById('quiz-form');
  const formData = new FormData(form);
  const scores = {
    Explorer: 0,
    Dreamer: 0,
    Realist: 0,
    Innovator: 0
  };

  formData.forEach((value) => {
    scores[value]++;
  });

  const resultType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  
  document.getElementById('quiz-screen').style.display = 'none';
  document.getElementById('result-screen').style.display = 'block';
  document.getElementById('result-type').innerText = resultType;
}
