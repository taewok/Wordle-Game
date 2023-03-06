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

  return (
    <Container>
      <Wrap>
        <Question/>
        <Answer word={word}/>
        <Answer word={word}/>
        <Answer word={word}/>
        <Answer word={word}/>
        <Answer word={word}/>
        <Answer word={word}/>
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
