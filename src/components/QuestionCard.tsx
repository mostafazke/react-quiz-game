import React from 'react';
import { Answer } from '../App';
import { Wrapper, ButtonWrapper } from './QuestionCard.style';

interface Props {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: Answer | undefined;
  questionNum: number;
  totalQuestions: number;
}
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => (
  <Wrapper>
    <p className='number'>
      Question {questionNum} / {totalQuestions}
    </p>
    <p className='question' dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button
            className='answer'
            data-answer={answer}
            disabled={!!userAnswer}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuestionCard;
