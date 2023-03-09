import React from "react";
import styled from "styled-components";

const KeyBoard = () => {
  const firstKeyList = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondKeyList = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdKeyList = ["Z", "X", "C", "V", "B", "N", "M"];

  //가상 키보드를 클릭했을때 비어있는 input에 누른 키보드에 맞는 알파벳을 value로 준다.
  const keyBoardOnClick = (value: string) => {
    const input: NodeListOf<HTMLInputElement> =
      document.querySelectorAll(".input");
    for (let i = 0; i < input.length; i++) {
      if (input[i].value === "") {
        input[i].value = value;
        break;
      }
    }
  };

  return (
    <Container>
      <KeyList>
        <First>
          {firstKeyList.map((value) => (
            <KeyItem onClick={() => keyBoardOnClick(value)} key={value}>
              {value}
            </KeyItem>
          ))}
        </First>
        <Second>
          {secondKeyList.map((value) => (
            <KeyItem onClick={() => keyBoardOnClick(value)} key={value}>
              {value}
            </KeyItem>
          ))}
        </Second>
        <Third>
          {thirdKeyList.map((value) => (
            <KeyItem onClick={() => keyBoardOnClick(value)} key={value}>
              {value}
            </KeyItem>
          ))}
        </Third>
      </KeyList>
    </Container>
  );
};

const Container = styled.div``;
const KeyList = styled.ul``;
const KeyItem = styled.ol`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 5px;
  width: 70px;
  height: 90px;
  background-color: #cacaca;
  border-radius: 15px;
  color: #303030;
  font-size: 2rem;
  cursor: pointer;
`;

const First = styled.div`
  display: flex;
  justify-content: center;
`;
const Second = styled(First)``;
const Third = styled(First)``;

export default KeyBoard;
