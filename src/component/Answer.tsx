import React from "react";
import styled, { keyframes } from "styled-components";

const Answer = () => {
  const onWordInput = (): any => {
    const input: NodeListOf<HTMLInputElement> =
      document.querySelectorAll(".input");
    for (let i = 0; i < input.length; i++) {
      if (input[i].value.length > 0) {
        input[i + 1].focus();
        continue;
      }
    }
  };

  return (
    <AnswerForm>
      <Input
        minLength={1}
        maxLength={1}
        className="input"
        onChange={() => onWordInput()}
        required
      />
      <Input
        minLength={1}
        maxLength={1}
        className="input"
        onChange={() => onWordInput()}
        required
      />
      <Input
        minLength={1}
        maxLength={1}
        className="input"
        onChange={() => onWordInput()}
        required
      />
      <Input
        minLength={1}
        maxLength={1}
        className="input"
        onChange={() => onWordInput()}
        required
      />
      <Input
        minLength={1}
        maxLength={1}
        className="input"
        onChange={() => onWordInput()}
        required
      />
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

const AnswerForm = styled.form`
  display: grid;
  align-items: center;
  justify-items: center;
  justify-content: center;
  grid-template-columns: repeat(5, 7vh);
  gap: 15px;
  padding: 7.5px 0px;
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  aspect-ratio: auto 1/1;
  border: 3px solid #d3d6da;
  border-radius: 5px;
  text-align: center;
  font-size: 3rem;
  cursor: pointer;
  &:valid {
    border: 3px solid black;
    animation: ${BigAndSmall} 0.5s forwards;
  }
`;

export default Answer;
