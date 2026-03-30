import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import questions from './questions';
import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  // Calculate progress percentage
  const progressPercentage = (currentQuestion / questions.length) * 100;

  return (
    <div className="app-wrapper">
      <Header />
      
      <main className="quiz-card">
        {showScore ? (
          <div className="score-section fade-in">
            <div className="trophy">🏆</div>
            <h2>Quiz Complete!</h2>
            <p className="score-text">You scored <strong>{score}</strong> out of <strong>{questions.length}</strong></p>
            <button className="btn-primary restart-btn" onClick={restartQuiz}>
              Play Again
            </button>
          </div>
        ) : (
          <div className="question-section fade-in">
            {/* New Progress Bar */}
            <div className="progress-container">
              <div 
                className="progress-bar" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>

            <div className="question-header">
              <span className="question-badge">Question {currentQuestion + 1} of {questions.length}</span>
            </div>
            
            <h3 className="question-text">{questions[currentQuestion].questionText}</h3>
            
            <div className="answer-options">
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button 
                  key={index} 
                  className="btn-answer"
                  onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;