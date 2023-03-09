import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Answer from "../component/Answer";
import KeyBoard from "../component/KeyBoard";
import Question from "../component/Question";

const Quiz = () => {
  const [word, setWord] = useState<string>("");

  //단어를 랜덤으로 뽑아 word에 담는다
  useEffect(() => {
    const getEnglishWord = () => {
      axios
        .get(`https://random-word-api.herokuapp.com/word?length=5`)
        .then((res) => {
          console.log(res.data);
          setWord(res.data[0]);
        });
    };
    getEnglishWord();
  }, []);

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target);

    const input: NodeListOf<HTMLInputElement> =
      document.querySelectorAll(".input");
    for (let i: number = 0; i < 5; i++) {
      if (e.target[i].value === word[i]) input[i].style.background = "#86E57F";
      else if (word.includes(e.target[i].value))
        input[i].style.background = "#FFE400";
      else input[i].style.background = "#BDBDBD";
      input[i].classList.remove(`input`);
    }
  };

  return (
    <Container>
      <Wrap>
        <Question />
        <Answer word={word} onSubmit={onSubmit} />
        <Answer word={word} onSubmit={onSubmit} />
        <Answer word={word} onSubmit={onSubmit} />
        <Answer word={word} onSubmit={onSubmit} />
        <Answer word={word} onSubmit={onSubmit} />
        <Answer word={word} onSubmit={onSubmit} />
      </Wrap>
      <KeyBoard />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  height: 100%;
`;
const Wrap = styled.div`
  width: 100%;
`;

export default Quiz;
