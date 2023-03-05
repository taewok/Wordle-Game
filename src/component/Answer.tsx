import React from "react";
import styled from "styled-components";

type InfoProps = {
  word: string;
};

const Answer = ({ word }: InfoProps) => {
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target);

    const input = document.querySelectorAll(".input");
    for (let i: number = 0; i < 5; i++) {
      if (e.target[i].value === word[i]) (input[i] as HTMLElement).style.background = "green";
      else if (word.includes(e.target[i].value)) (input[i] as HTMLElement).style.background = "yellow";
      else (input[i] as HTMLElement).style.background = "gray";
      input[i].classList.remove(`input`);
    }
  };

  return (
    <AnswerForm onSubmit={(e) => onSubmit(e)}>
      <Input maxLength={1} className="input" />
      <Input maxLength={1} className="input" />
      <Input maxLength={1} className="input" />
      <Input maxLength={1} className="input" />
      <Input maxLength={1} className="input" />
      <button type="submit">dfsfd</button>
    </AnswerForm>
  );
};

const AnswerForm = styled.form`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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
`;

export default Answer;
