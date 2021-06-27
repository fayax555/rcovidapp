import React, { useEffect, useState } from 'react';
import { quiz } from './quizContent.js';
import { Button, Wrapper, Text } from './Styles.jsx';
import QuizButton from './QuizButton.jsx';

export default function Quiz() {
   const [count, setCount] = useState(0);
   const [isClick, setIsClicked] = useState(false);
   const [isCorrect, setIsCorrect] = useState(false);
   const [score, setScore] = useState(0);
   const [gameOver, setGameOver] = useState(false);

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

         {isClick && !(count === quiz.length - 1) && (
            <Button
               style={{ backgroundColor: '#333' }}
               onClick={handleNextBtn}
               mt='2rem'
               p='1.5rem 3rem'
            >
               Next
            </Button>
         )}
      </>
   );

   function handleRestart() {
      setCount(0);
      setIsClicked(false);
      setIsCorrect(false);
      setScore(0);
      setGameOver(false);
   }
   const quizOver = () => (
      <Wrapper mt='5rem'>
         <Text size='3rem'>Game Over</Text>
         <Text size='2rem'>Your Score is: {score}</Text>
         <Button onClick={handleRestart}>Restart</Button>
      </Wrapper>
   );

   useEffect(() => {
      if (count === quiz.length - 1 && isClick === true) {
         setTimeout(() => {
            setGameOver(true);
         }, 2000);
      }
   }, [count, isClick]);

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
            {gameOver ? quizOver() : quizContent()}
         </Wrapper>
      </div>
   );
}
