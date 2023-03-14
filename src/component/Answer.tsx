import React from "react";
import styled, { keyframes } from "styled-components";

const Answer = () => {
  return (
    <AnswerForm className="form">
      <Input minLength={1} maxLength={1} className="input" required disabled />
      <Input minLength={1} maxLength={1} className="input" required disabled />
      <Input minLength={1} maxLength={1} className="input" required disabled />
      <Input minLength={1} maxLength={1} className="input" required disabled />
      <Input minLength={1} maxLength={1} className="input" required disabled />
    </AnswerForm>
  );
};

const BigAndSmall = keyframes`
  0%{
    scale: 1.2;
  }
  100%{
    scale: 1;
  }
`;
const LeftAndRight = keyframes`
  0%{
    transform: translateX(-15px);
  }
  20%{
    transform: translateX(15px);
  }
  40%{
    transform: translateX(-15px);
  }
  55%{
    transform: translateX(15px);
  }
  75%{
    transform: translateX(-15px);
  }
  85%{
    transform: translateX(15px);
  }
  100%{
    transform: translateX(0);
  }
`;

const AnswerForm = styled.form`
  display: grid;
  align-items: center;
  justify-items: center;
  justify-content: center;
  grid-template-columns: repeat(5, 8vh);
  gap: 10px;
  padding: 3px 0px;
  width: 100%;
  &.active {
    animation: ${LeftAndRight} 0.3s ease-in-out;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(5, 7vh);
    width: 100%;
  }
`;
const Input = styled.input`
  width: 100%;
  aspect-ratio: auto 1/1;
  background-color: white;
  border: 3px solid #d3d6da;
  border-radius: 5px;
  text-align: center;
  font-size: 3rem;
  &:valid {
    border: 3px solid black;
    animation: ${BigAndSmall} 0.5s forwards;
  }
  @media screen and (max-width: 767px) {
    font-size: 2.5rem;
  }
`;

export default Answer;
