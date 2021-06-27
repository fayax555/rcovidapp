import React, { useState } from 'react';
import { Button, Wrapper, Text } from './Styles.jsx';
import QuizButton from './QuizButton.jsx';

export default function Quiz() {
   const [count, setCount] = useState(0);
   const [isClick, setIsClicked] = useState(false);
   const [isCorrect, setIsCorrect] = useState(false);
   const [score, setScore] = useState(0);

   const quiz = [
      {
         question: `What is HPA's phone number?`,
         answers: [
            { text: '7915423', correct: false },
            { text: '1676', correct: true },
            { text: '1444', correct: false },
         ],
      },
      {
         question:
            'Which one of the following are the most common symptoms of Covid-19?',
         answers: [
            { text: 'Fever, cough, tiredness', correct: true },
            { text: 'dizziness, body ache', correct: false },
         ],
      },
      {
         question: 'What test tells you if you previously had covid?',
         answers: [
            { text: 'Antibody', correct: true },
            { text: 'PCR', correct: false },
            { text: 'No test can tell you', correct: false },
         ],
      },
      {
         question: 'Can you always tell if someone has COVID-19?',
         answers: [
            { text: 'Yes', correct: false },
            { text: 'No', correct: true },
         ],
      },
   ];

   const handleNextBtn = () => {
      setIsClicked(false);
      setCount(count + 1);
   };

   const quizContent = () => (
      <>
         <h1
            style={{
               visibility: isClick ? 'visible' : 'hidden',
               color: isCorrect ? 'green' : 'red',
            }}
         >
            {isCorrect ? 'CORRECT!' : 'WRONG'}
         </h1>
         <Text size='1.75rem'>{quiz[count].question}</Text>
         {quiz[count].answers.map((answer) => (
            <>
               <QuizButton
                  isClicked={isClick}
                  setIsClicked={setIsClicked}
                  setIsCorrect={setIsCorrect}
                  score={score}
                  setScore={setScore}
                  text={answer.text}
                  correct={answer.correct}
               />
            </>
         ))}

         <Button
            style={{ backgroundColor: '#333' }}
            onClick={handleNextBtn}
            mt='2rem'
            p='1.5rem 3rem'
         >
            Next
         </Button>
      </>
   );

   function handleRestart() {
      setCount(0);
      setIsClicked(false);
      setIsCorrect(false);
      setScore(0);
   }
   const quizOver = () => (
      <Wrapper mt='5rem'>
         <Text size='3rem'>Game Over</Text>
         <Text size='2rem'>Your Score is: {score}</Text>
         <Button onClick={handleRestart}>Restart</Button>
      </Wrapper>
   );

   const content = () => {
      if (isClick && count === quiz.length - 1) {
         return quizOver();
      } else {
         return quizContent();
      }
   };

   return (
      <div className='Quiz'>
         <Wrapper mt='2rem'>
            {count < quiz.length && (
               <Wrapper fdir='row' gap='35rem'>
                  <Text size='1.5rem'>
                     Question: {count + 1}/{quiz.length}
                  </Text>
                  <Text size='1.5rem'>Score: {score}</Text>
               </Wrapper>
            )}
            {content()}
         </Wrapper>
      </div>
   );
}
