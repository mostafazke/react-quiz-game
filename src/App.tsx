import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuestions, Difficulty, Question } from './API';

import { GlobalStyle, Wrapper } from './App.style';

export type Answer = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 15;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]);
  const [score, setScore] = useState(0);
  const [gameover, setGameover] = useState(true);

  const start = async () => {
    setLoading(true);
    setGameover(false);

    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const check = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameover) {
      const answer = e.currentTarget.getAttribute('data-answer') || '';
      const correct = questions[number].correct_answer === answer;
      if (correct) {
        setScore((prev) => prev + 1);
      }
      const answerObj: Answer = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObj]);
    }
  };

  const next = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameover(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Quiz Trivia</h1>
        {gameover || number + 1 === TOTAL_QUESTIONS ? (
          <button className='start' onClick={start}>
            Start Quiz
          </button>
        ) : null}
        {!gameover && <p className='score'>Score: {score}</p>}
        {loading && <p className='loading'>Loading Questions...</p>}
        {!loading && !gameover && (
          <QuestionCard
            questionNum={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={check}
          />
        )}
        {!gameover &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 && (
            <button className='next' onClick={next}>
              Next Question
            </button>
          )}
      </Wrapper>
    </>
  );
}

export default App;
