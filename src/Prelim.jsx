import React from 'react';
import './BibleQuiz.css';

const BibleQuiz = () => {
  const [question, setQuestion] = React.useState(0);
  const [correct, setCorrect] = React.useState(true);

  const questions = [
    {
      text: 'The Bible consists of the Old and New Testaments.',
      answer: true,
    },
    {
      text: 'Moses led the Israelites out of Egypt.',
      answer: true,
    },
    {
      text: 'The Sermon on the Mount is found in the Book of Luke.',
      answer: false,
    },
  ];

  const handleAnswer = (answer) => {
    setCorrect(answer === questions[question].answer);
    setQuestion(question + 1);
  };

  return (
    <div className="bible-quiz">
      <h2>{questions[question].text}</h2>
      <button
        onClick={() => handleAnswer(true)}
        style={{ backgroundColor: correct ? 'green' : 'red' }}
      >
        True
      </button>
      <button
        onClick={() => handleAnswer(false)}
        style={{ backgroundColor: correct ? 'red' : 'green' }}
      >
        False
      </button>
    </div>
  );
};

export default BibleQuiz;
