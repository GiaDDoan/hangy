import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { colors } from "./GlobalStyles";

const GameOverModal = ({ gameStatus, handleReset, word }) => {
  return (
    <Wrapper overStatus={gameStatus.over}>
      <Content>
        <Heading>YOU {gameStatus.win ? "WIN 🤩" : "LOSE 😱"} !!</Heading>
        <Word> {word.str} </Word>
        <Button onClickFunc={handleReset}>New Game</Button>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  backdrop-filter: blur(4px);
  /* display: flex; */
  /* display: none; */
  display: ${(props) => (props.overStatus ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
`;
const Content = styled.div`
  background: white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 200px;
  width: 300px;
  padding: 20px;
`;
const Heading = styled.p`
  color: ${colors.fuchsia};
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`;
const Word = styled.p`
  color: ${colors.green};
  font-size: 24px;
  font-weight: 600;
  margin: 18px 0;
`;

export default GameOverModal;
