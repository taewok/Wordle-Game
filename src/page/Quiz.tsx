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
          console.log(
            res.data[0]
              .split("")
              .map((str: string) => str.toUpperCase())
              .join("")
          );
          setWord(
            res.data[0]
              .split("")
              .map((str: string) => str.toUpperCase())
              .join("")
          );
        });
    };
    getEnglishWord();
  }, []);

  return (
    <Container>
      <Wrap>
        <Question />
        <Answer />
        <Answer />
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </Wrap>
      <KeyBoard word={word} />
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
