import React from "react";
import styled, { keyframes } from "styled-components";

type InfoProps = {
  word: string;
  onSubmit: any;
};

const Answer = ({ word, onSubmit }: InfoProps) => {
  const onWordInput = (): any => {
    const input: NodeListOf<HTMLInputElement> = document.querySelectorAll(".input");
    for (let i = 0; i < input.length; i++) {
      if (input[i].value.length > 0) {
        input[i + 1].focus();
        continue;
      }
    }
  };

  return (
    <AnswerForm onSubmit={(e) => onSubmit(e)}>
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
      <AnswerBtn
        type="submit"
        onClick={(e) => {
          console.log(e);
        }}
      >
        도전
      </AnswerBtn>
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 15px;
  padding: 7.5px 0px;
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  aspect-ratio: auto 1/1;
  border: 3px solid black;
  border-radius: 15px;
  text-align: center;
  font-size: 3rem;
  cursor: pointer;
  &:valid {
    animation: ${BigAndSmall} 0.5s forwards;
  }
`;
const AnswerBtn = styled.button`
  width: 100%;
  height: 50%;
  border-radius: 15px;
  cursor: pointer;
`;

export default Answer;
