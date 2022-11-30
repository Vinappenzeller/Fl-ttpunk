const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

document.getElementById("question").style.color = "white";

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Neutstart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
    {
      question: 'Wie hiess die politische Ideologie der Sowjetunion?',
      answers: [
        { text: 'Marxismus-Leninismus', correct: true },
        { text: 'Postmarxismus', correct: false }
      ]
    },
    {
      question: 'Wer war am ersten Weltkrieg schuld?',
      answers: [
        { text: 'Österreich-Ungarn', correct: true },
        { text: 'Serbien', correct: true },
        { text: 'Deutschland', correct: true },
        { text: 'Russland', correct: true }
      ]
    },
    {
      question: 'Welchen Namen trug der Sultan, welcher 1453 Konstantinopel eroberte?',
      answers: [
        { text: 'Osman I.', correct: false },
        { text: 'Bayezid II.', correct: false },
        { text: 'Murad III.', correct: false },
        { text: 'Mehmed II.', correct: true }
      ]
    },
    {
      question: 'Das wie vielte Rom war Konstantinopel?',
      answers: [
        { text: '1', correct: false },
        { text: '2', correct: true },
        { text: '3', correct: false }
      ]
    },
    {
        question: 'Inwiefern waren Willhelm II., Nikolaus II. und George V. miteinander verwandt?',
        answers: [
          { text: 'Sie waren gar nicht verwandt', correct: false },
          { text: 'Sie waren Cousins', correct: true },
          { text: 'Willhelm II. war nur mit Nikolaus II. verwandt', correct: false },
          { text: 'Willhelm II. war nur mit George V. verwandt', correct: false }
        ]
    },
    {
        question: 'Während der Helvetischen Republik war Zürich die Hauptstadt der Schweiz. Richtig oder falsch?',
        answers: [
          { text: 'richtig', correct: false },
          { text: 'falsch', correct: true }
        ]
      },
      {
        question: 'In welchem Land wurde Leo Trotzki von Agenten Stalins ermordet?',
        answers: [
          { text: 'Finnland', correct: false },
          { text: 'Argentinien', correct: false },
          { text: 'Mexiko', correct: true },
          { text: 'Polen', correct: false }
        ]
    },
    {
        question: 'Wie lange regierte Ludwig XIV. als König von Frankreich?',
        answers: [
          { text: '72 Jahre', correct: true },
          { text: '46 Jahre', correct: false },
          { text: '67 Jahre', correct: false },
          { text: '58 Jahre', correct: false }
        ]
    },
    {
        question: 'Wer schrieb die Göttliche Komödie? Tipp: Der erste Teil heisst Inferno.',
        answers: [
          { text: 'Publius Vergilius Maro', correct: false },
          { text: 'Francesco Petrarca', correct: false },
          { text: 'Marcus Aurelius', correct: false },
          { text: 'Dante Alighieri', correct: true }
        ]
    },
    {
        question: 'Welchen dieser Spitznamen trug Friedrich II.(König von Preußen)? (Fakt: Einer seiner anderen Spitznamen war "Der Philosophenkönig")',
        answers: [
          { text: 'Der stälerne', correct: false },
          { text: 'Der Weise', correct: false },
          { text: 'Der alte Fritz', correct: true },
          { text: 'Der junge Philosoph', correct: false }
        ]
    },
    {
      question: 'Wer war der erste Kaiser des römischen Reiches?',
      answers: [
        { text: 'Claudius', correct: false },
        { text: 'Gaius Julius', correct: false },
        { text: 'Caligula', correct: false },
        { text: 'Augustus', correct: true }
      ]
  },
  {
        question: 'In welcher Stadt wurde der Kronprinz von Österreich-Ungarn Franz-Ferdinand ermordet?',
        answers: [
          { text: 'Skopja', correct: false },
          { text: 'Sarajevo', correct: true },
          { text: 'Belgrad', correct: false },
          { text: 'Zagreb', correct: false }
        ]
    },
    {
        question: 'Gegen wenn verloren die Australier 1932 de facto einen Krieg?',
        answers: [
          { text: 'Aborigines', correct: false },
          { text: 'Gegen sich selber', correct: false },
          { text: 'Kängurus', correct: false },
          { text: 'Emus', correct: true }
        ]
    },
    {
        question: 'Was ging nach dem Sieg über die Nazis in Moskau am Tag darauf aus?',
        answers: [
          { text: 'Wodka', correct: true },
          { text: 'Kaviar', correct: false },
          { text: 'Feuerwerk', correct: false },
          { text: 'Zigaretten', correct: false }
        ]
    },
    {
        question: 'Aus welchem Land stammt Karl Marx?',
        answers: [
          { text: 'Polen', correct: false },
          { text: 'Österreich', correct: false },
          { text: 'Deutschland', correct: true },
          { text: 'Russland', correct: false }
        ]
    },
  ]