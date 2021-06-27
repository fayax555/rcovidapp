import React from 'react';
import styled from 'styled-components';
import { Button } from './Styles.jsx';
import correctSound from './assets/audio/correct.mp3';
import wrongSound from './assets/audio/wrong.mp3';

const QuizButton = styled(Button)`
   width: 800px;
   padding: 1rem;
   display: inline-block;
   background-color: blue;
`;

export default function QuizButtonFn({
   isClicked,
   setIsClicked,
   setIsCorrect,
   text,
   correct,
   score,
   setScore,
}) {
   const ansColor = () => {
      if (isClicked && correct) return 'green';
      if (isClicked && !correct) return 'red';
   };

   const handleClick = () => {
      new Audio(correct ? correctSound : wrongSound).play();
      setIsClicked(true);
      setIsCorrect(correct);
      setScore(correct ? score + 1 : score);
   };

   return (
      <div>
         <QuizButton
            disabled={isClicked}
            style={{
               backgroundColor: ansColor(),
            }}
            onClick={handleClick}
            isClicked={isClicked}
            correct={correct}
         >
            {text}
         </QuizButton>
      </div>
   );
}
