import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Answer from "../component/quiz/Answer";

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
  width: 50vh;
  height: 100%;
`;
const Wrap = styled.div`
  padding-top: 8vh;
  width: 100%;
  height: 100%;
`;

export default Quiz;
