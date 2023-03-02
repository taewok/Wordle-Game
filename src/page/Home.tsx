import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Home = () => {
  return (
    <Container>
      <Title>
        <p>영어 단어 퀴즈</p>
        <span>english word quiz</span>
        <StartBtn>
          <Link to={`/quiz`}>시작하기</Link>
        </StartBtn>
      </Title>
    </Container>
  );
};

const closeUp = keyframes`
    0%{
        font-size: 10rem;
        transform: translate(0,120%);
    }
    100%{
        font-size: 4rem;
        transform: translate(0,-20%);
    }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f88d00;
  animation: ${closeUp} 1s normal forwards;
  span {
    font-size: 2rem;
    color: #747474;
  }
`;
const StartBtn = styled.button`
  margin-top: 10px;
  padding: 10px 45px;
  background-color: transparent;
  border-radius: 20px;
  font-size: 1rem;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #fcf9be;
    font-weight: bold;
  }
  a {
    color: black;
  }
`;

export default Home;
