import React from 'react';
import styled from 'styled-components';
import { Button } from './Styles.jsx';

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
