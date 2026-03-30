 
const questions = [
  {
    questionText: 'What is the correct command to create a new React project using Vite?',
    answerOptions: [
      { answerText: 'npm create react-app', isCorrect: false },
      { answerText: 'npm create vite@latest', isCorrect: true },
      { answerText: 'npx create-react-app', isCorrect: false },
      { answerText: 'npm init react', isCorrect: false },
    ],
  },
  {
    questionText: 'Which hook is used to manage state in a functional component?',
    answerOptions: [
      { answerText: 'useEffect', isCorrect: false },
      { answerText: 'useContext', isCorrect: false },
      { answerText: 'useState', isCorrect: true },
      { answerText: 'useReducer', isCorrect: false },
    ],
  },
  {
    questionText: 'How do you pass data from a parent component to a child component?',
    answerOptions: [
      { answerText: 'Using State', isCorrect: false },
      { answerText: 'Using Props', isCorrect: true },
      { answerText: 'Using localStorage', isCorrect: false },
      { answerText: 'Using Context', isCorrect: false },
    ],
  },
  {
    questionText: 'What does JSON stand for?',
    answerOptions: [
      { answerText: 'JavaScript Object Notation', isCorrect: true },
      { answerText: 'Java Standard Output Network', isCorrect: false },
      { answerText: 'JavaScript Oriented Notation', isCorrect: false },
      { answerText: 'Java Syntax Object Notation', isCorrect: false },
    ],
  }
];

export default questions;