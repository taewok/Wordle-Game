import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { GiFallingStar } from "react-icons/gi";
import { BsFire } from "react-icons/bs";

type InfoProps = {
  result: boolean;
  challengeCount: number;
  word:string;
};

const Result = ({ result, challengeCount,word }: InfoProps) => {
  const AgainBtnOnClick = () => {
    window.location.reload();
  };

  return (
    <Container className="result">
      {result ? (
        <CongratsMsg>
          <GiFallingStar />
          축하합니다!!
          <GiFallingStar />
          <ChallengeCount>총 {challengeCount}번 만에 정답</ChallengeCount>
          <Explain>
            <AgainBtn onClick={() => AgainBtnOnClick()}>다음 문제</AgainBtn>
          </Explain>
        </CongratsMsg>
      ) : (
        <FailMsg>
            <BsFire />
            안타깝네요...
            <BsFire />
          <Answer>정답: {word}</Answer>
          <Explain>
            <AgainBtn onClick={() => AgainBtnOnClick()}>다른 문제</AgainBtn>
          </Explain>
        </FailMsg>
      )}
    </Container>
  );
};

const Basic = keyframes`
  0%{
    transform: translate(-50%, -40%);
    opacity: 0;
  }
  100%{
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

const Container = styled.div`
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 50%;
  /* transform: translate(-50%, -50%); */
  display: none;
  justify-content: center;
  width: 480px;
  height: 250px;
  background-color: #ffffff;
  border: 2px solid #c5c5c5;
  animation: ${Basic} 1s forwards;
  @media screen and (max-width: 767px) {
    width: 80%;
  }
`;
const CongratsMsg = styled.div`
  padding: 10px;
  font-size: 2rem;
  svg {
    color: #ffff00;
    &:nth-child(1) {
      transform: rotateY(180deg);
    }
  }
`;
const FailMsg = styled.div`
  padding: 10px;
  font-size: 2rem;
  svg {
    color: #ff8800;
    &:nth-child(1) {
      transform: rotateY(180deg);
    }
  }
`;

const ChallengeCount = styled.div`
  padding: 50px 0;
  text-align: center;
  font-size: 1.3rem;
`;
const Answer = styled(ChallengeCount)``;
const Explain = styled.div`
  display: flex;
  justify-content: center;
`;
const AgainBtn = styled.button`
  width: 100px;
  height: 30px;
  background-color: transparent;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
`;

export default Result;
