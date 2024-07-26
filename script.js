function startQuiz() {
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('quiz-screen').style.display = 'block';
  document.getElementById('question-1').style.display = 'block';
  document.getElementById('question-number').innerText = '1';
}

function showNextQuestion(currentQuestion) {
  const currentQuestionCard = document.getElementById(`question-${currentQuestion}`);
  const selectedAnswer = currentQuestionCard.querySelector('input[name="q' + currentQuestion + '"]:checked');
  
  if (!selectedAnswer) {
    document.getElementById('popup').style.display = 'flex';
    return;
  }

  document.getElementById(`question-${currentQuestion}`).style.display = 'none';
  document.getElementById(`question-${currentQuestion + 1}`).style.display = 'block';
  document.getElementById('question-number').innerText = (currentQuestion + 1).toString();
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function submitQuiz() {
  const currentQuestionCard = document.getElementById('question-10');
  const selectedAnswer = currentQuestionCard.querySelector('input[name="q10"]:checked');
  
  if (!selectedAnswer) {
    document.getElementById('popup').style.display = 'flex';
    return;
  }

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
