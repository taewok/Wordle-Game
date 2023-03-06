import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Answer from "../component/Answer";
import Question from "../component/Question";

const Quiz = () => {
  const [word, setWord] = useState<string>("");
  const [korean, setKorean] = useState<string>("");

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

    const input = document.querySelectorAll(".input");
    for (let i: number = 0; i < 5; i++) {
      if (e.target[i].value === word[i])
        (input[i] as HTMLElement).style.background = "#86E57F";
      else if (word.includes(e.target[i].value))
        (input[i] as HTMLElement).style.background = "#FFE400";
      else (input[i] as HTMLElement).style.background = "#BDBDBD";
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
    </Container>
  );
};

const Container = styled.div`
  width: 55vh;
`;
const Wrap = styled.div`
  margin-top: 8vh;
  width: 100%;
`;

export default Quiz;
