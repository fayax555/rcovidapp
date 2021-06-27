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

   const handleClick = () => {
      setIsClicked(false);
      if (count < quiz.length) {
         setCount(count + 1);
      }
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

         <Text fs='1.75rem'>{quiz[count].question}</Text>

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

         {isClick && (
            <Button
               style={{ backgroundColor: '#333' }}
               onClick={handleClick}
               mt='2rem'
               p='1.5rem 3rem'
            >
               Next
            </Button>
         )}
      </>
   );

   return (
      <div className='Quiz'>
         <Wrapper mt='2rem'>
            {count < quiz.length && (
               <>
                  <Text fs='1.5rem'>Question: {count + 1}</Text>
                  <Text fs='1.5rem'>Score: {score}</Text>
               </>
            )}
            {count < quiz.length ? (
               quizContent()
            ) : (
               <Wrapper mt='5rem'>
                  <Text fs='3rem'>Game Over</Text>
                  <Text fs='2rem'>Your Score is: {score}</Text>
                  <Button onClick={() => setCount(0)}>Restart</Button>
               </Wrapper>
            )}
         </Wrapper>
      </div>
   );
}
