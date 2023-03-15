import React from "react";
import styled from "styled-components";
import { MdOutlineBackspace } from "react-icons/md";

type InfoProps = {
  word: string;
  setResult: any;
  setChallengeCount: any;
};

const KeyBoard = ({ word, setResult, setChallengeCount }: InfoProps) => {
  const firstKeyList = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondKeyList = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdKeyList = ["Z", "X", "C", "V", "B", "N", "M"];

  //가상 키보드를 클릭했을때 비어있는 input에 누른 키보드에 맞는 알파벳을 value로 준다.
  const keyBoardOnClick = (value: string) => {
    const input: NodeListOf<HTMLInputElement> =
      document.querySelectorAll(".input");
    for (let i = 0; i < 5; i++) {
      if (input[i].value === "") {
        input[i].value = value;
        input[i].classList.add("vaild");
        break;
      }
    }
  };

  //삭제 버튼을 누르면 가장 앞번호에 input 부터 값이 삭제
  const deleteBtnOnClick = () => {
    const input: NodeListOf<HTMLInputElement> =
      document.querySelectorAll(".input");
    for (let i = input.length - 1; i >= 0; i--) {
      if (input[i].value !== "") {
        input[i].value = "";
        input[i].classList.remove("vaild");
        break;
      }
    }
  };

  //enter 버튼을 누르면 현재 줄에 input들의 값을 검사하고 그에 따른 색을 바꾼다
  const enterBtnOnClick = () => {
    const input: NodeListOf<HTMLInputElement> =
      document.querySelectorAll(".input");
    const form: NodeListOf<HTMLElement> = document.querySelectorAll(".form");
    const alert: NodeListOf<HTMLElement> = document.querySelectorAll(".alert");
    const result: NodeListOf<HTMLElement> =
      document.querySelectorAll(".result");
    let array: any[] = [];
    for (let i: number = 0; i < 5; i++) {
      array[i] = input[i].value;
    }
    //5칸 이하에 알파벳이 입력되어 있을 떄
    if (array.join("").length < 5) {
      form[0].classList.add("active");
      alert[0].classList.add("active");
      setTimeout(() => {
        form[0].classList.remove("active");
        alert[0].classList.remove("active");
      }, 1500);
    } else {
      setChallengeCount((num: any) => num + 1);
      if (array.join("") === word) {
        for (let i: number = 0; i < 5; i++) {
          input[i].classList.add("success");
        }
        setTimeout(() => {
          setResult(true);
          result[0].style.display = "flex";
        }, 1500);
      } else {
        for (let i: number = 0; i < 5; i++) {
          const key: any = document.querySelector(`#${input[i].value}`);
          if (input[i].value === word[i]) {
            key.style.background = "#86E57F";
            input[i].style.background = "#86E57F";
          } else if (word.includes(input[i].value)) {
            key.style.background = "#FFE400";
            input[i].style.background = "#FFE400";
          } else {
            key.style.background = "#7c7c7c";
            input[i].style.background = "#BDBDBD";
          }
          form[0].classList.remove("form");
          input[i].classList.remove(`input`);
        }
        //마지막 기회였다면
        if (form.length === 1) {
          result[0].style.display = "flex";
        }
      }
    }
  };

  return (
    <Container>
      <KeyList>
        <First>
          {firstKeyList.map((value) => (
            <KeyItem
              onClick={() => keyBoardOnClick(value)}
              key={value}
              id={value}
            >
              {value}
            </KeyItem>
          ))}
        </First>
        <Second>
          {secondKeyList.map((value) => (
            <KeyItem
              onClick={() => keyBoardOnClick(value)}
              key={value}
              id={value}
            >
              {value}
            </KeyItem>
          ))}
        </Second>
        <Third>
          <EnterBtn onClick={() => enterBtnOnClick()}>Enter</EnterBtn>
          {thirdKeyList.map((value) => (
            <KeyItem
              onClick={() => keyBoardOnClick(value)}
              key={value}
              id={value}
            >
              {value}
            </KeyItem>
          ))}
          <DeleteBtn onClick={() => deleteBtnOnClick()}>
            <MdOutlineBackspace />
          </DeleteBtn>
        </Third>
      </KeyList>
    </Container>
  );
};

const Container = styled.div`
  @media screen and (max-width: 767px) {
    padding-top: 5vw;
    width: 100%;
  }
`;
const KeyList = styled.ul``;
const KeyItem = styled.ol`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 5px;
  width: 70px;
  aspect-ratio: 2/2;
  background-color: #cacaca;
  border-radius: 15px;
  color: #303030;
  font-size: 2rem;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    margin: 5px 3px;
    width: 40px;
    aspect-ratio: auto;
    border-radius: 5px;
    font-size: 1.5rem;
  }
`;

const First = styled.div`
  display: flex;
  justify-content: center;
`;
const Second = styled(First)``;
const Third = styled(First)``;

const EnterBtn = styled(KeyItem)`
  width: 100px;
  aspect-ratio: 1/0.5;
  @media screen and (max-width: 767px) {
    aspect-ratio: 1/0.3;
  }
`;
const DeleteBtn = styled(EnterBtn)`
  width: 120px;
  font-size: 3rem;
  @media screen and (max-width: 767px) {
    font-size: 2rem;
  }
`;

export default KeyBoard;
