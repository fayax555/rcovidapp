import styled from 'styled-components';

export const Button = styled.button`
   font-size: ${(props) => props.fs || '1.5rem'};
   margin: 1rem;
   margin-top: ${(props) => props.mt};
   padding: ${(props) => props.p || '0.55rem 1.5rem'};
   border: none;
   color: ${(props) => props.color || 'white'};
   background-color: ${(props) => props.bgColor || 'blue'};
   border-radius: 3px;
   cursor: pointer;
   &:hover {
      opacity: 0.7;
   }
`;

export const Text = styled.p`
   font-size: ${(props) => props.fs || '1rem'};
   margin: ${(props) => props.m};
`;

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: ${(props) => props.mt};
`;
