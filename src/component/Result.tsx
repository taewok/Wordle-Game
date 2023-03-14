import React, { useState } from "react";
import styled from "styled-components";
import { GiFallingStar } from "react-icons/gi";

type InfoProps = {
  result: boolean;
};

const Result = ({ result }: InfoProps) => {
  return (
    <Container className="result">
      {result ? (
        <CongratsMsg>
          <GiFallingStar />
          축하합니다!!
          <GiFallingStar />
        </CongratsMsg>
      ) : (
        <FailMsg>안타깝네요...</FailMsg>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  justify-content: center;
  width: 480px;
  height: 250px;
  background-color: #ffffff;
  border: 2px solid #c5c5c5;
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
    color: #ffff00;
    &:nth-child(1) {
      transform: rotateY(180deg);
    }
  }
`;

export default Result;
