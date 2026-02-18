import { evaluate, getAnswers, getProposalApi, getQuestionsApi, saveAnswer } from './store.js';
import './style.css';

export let quizzData;
export let currentQuestion;
export let score;
let questionElement;
let proposalsElement;

export async function initQuizz(questions) {
  quizzData = [];
  localStorage.clear();
  
  questionElement = document.getElementById("question");
  proposalsElement = document.getElementById("proposals");
    
  currentQuestion = 0;
  score = 0;

  
  quizzData = await getQuestionsApi();
    
  for (let i = 0; i < quizzData.length; i++) {
    let proposals = await getProposalApi(quizzData[i].id);
    quizzData[i].proposals = proposals;
  }

  showQuestion();
}
  
async function showQuestion() {
  const question = quizzData[currentQuestion];
  questionElement.innerText = question.label
  
  proposalsElement.innerHTML = "";
  question.proposals.forEach((proposal, index) => {
    const button = document.createElement("button");
    button.innerText = proposal.label;
    button.setAttribute("aria-label", `Réponse ${index + 1}: ${proposal.label}`);
    button.setAttribute("type", "button");
    proposalsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });

  const firstBtn = proposalsElement.querySelector("button");
  if (firstBtn) firstBtn.focus({ focusVisible: true });
}
  
async function selectAnswer(e) {
  const selectedButton = e.target;
  let proposals = quizzData[currentQuestion].proposals;

  for (let i = 0; i < proposals.length; i++) {
    if (selectedButton.innerText === proposals[i].label) {
      saveAnswer(proposals[i])
    }
  }

  currentQuestion++;
  if (currentQuestion < quizzData.length) {
    showQuestion();
  } else {
    showResult();
  }
}
  
async function showResult() {
  let answers = getAnswers();
  const newAnswers = answers.map(({label, ...id}) => id)

  score = await evaluate(newAnswers);

  quiz.innerHTML = `
    <h1>Quizz Finis!</h1>
    <p role="status" aria-live="assertive">Ton score: <strong>${score}/${quizzData.length}</strong></p>
  `;
}