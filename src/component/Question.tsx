import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Question = () => {
  const [explain, setExplain] = useState<boolean>(true);

  const explainOnClick = (): any => {
    setExplain(!explain);
  };

  return (
    <Container>
      <AiOutlineQuestionCircle onClick={() => explainOnClick()} />
      {explain && (
        <Explain>
          <XBtnDiv>
            <XBtn onClick={() => explainOnClick()}>X</XBtn>
          </XBtnDiv>
          <h3>게임 설명</h3>
          <ExplainList>
            <ExplainItem>1. 기회는 총 6번!!!</ExplainItem>
            <ExplainItem>
              2. 타일 색깔에 따른 추측 가능
              <p>
                알파벳이 정답 단어에 들어가고 순서까지 일치하면{" "}
                <PointSpan color="#59bb52">녹색</PointSpan>
              </p>
              <ExampleList>
                <ExampleItem color="#86E57F">a</ExampleItem>
                <ExampleItem>p</ExampleItem>
                <ExampleItem>p</ExampleItem>
                <ExampleItem>l</ExampleItem>
                <ExampleItem>e</ExampleItem>
              </ExampleList>
            </ExplainItem>
            <ExplainItem>
              <p>
                알파벳이 정답 단어에는 들어가지만 순서가 틀리면{" "}
                <PointSpan color="#eeff00">노란색</PointSpan>
              </p>
              <ExampleList>
                <ExampleItem color="#FFE400">a</ExampleItem>
                <ExampleItem>p</ExampleItem>
                <ExampleItem>p</ExampleItem>
                <ExampleItem>l</ExampleItem>
                <ExampleItem>e</ExampleItem>
              </ExampleList>
            </ExplainItem>
            <ExplainItem>
              <p>
                알파벳이 정답 단어에 들어가지 않는다면{" "}
                <PointSpan color="#BDBDBD">회색</PointSpan>
              </p>
              <ExampleList>
                <ExampleItem color="#BDBDBD">a</ExampleItem>
                <ExampleItem>p</ExampleItem>
                <ExampleItem>p</ExampleItem>
                <ExampleItem>l</ExampleItem>
                <ExampleItem>e</ExampleItem>
              </ExampleList>
            </ExplainItem>
          </ExplainList>
        </Explain>
      )}
    </Container>
  );
};

const Container = styled.div`
  font-size: 2rem;
  svg {
    cursor: pointer;
    &:hover {
      color: #a3a3a3;
    }
  }
`;
const Explain = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
  padding: 15px 10px 75px 10px;
  width: 55vh;
  background-color: #ffdca9;
  border-radius: 5px;
  color: #303030;
  h3 {
    text-align: center;
  }
  @media screen and (max-width: 767px) {
    width: 80vw;
    padding: 15px 10px 45px 10px;
    font-size: 1.2rem;
  }
`;
const XBtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const XBtn = styled.button`
  font-size: 1.5rem;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
`;

const ExplainList = styled.ul``;
const ExplainItem = styled.ol`
  padding: 5px;
  font-size: 1.2rem;
  p {
    margin: 10px 15px;
  }
`;
const PointSpan = styled.span`
  padding: 3px;
  background-color: ${(props) => props.color};
`;

const ExampleList = styled.ul`
  display: flex;
  margin: 10px 15px;
`;
const ExampleItem = styled.ol`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  width: 50px;
  aspect-ratio: auto 1/1;
  border: 3px solid black;
  border-radius: 15px;
  font-size: 2rem;
  text-align: center;
  background-color: #bdbdbd;
  &:nth-child(1) {
    background-color: ${(props) => props.color};
  }
`;

export default Question;
