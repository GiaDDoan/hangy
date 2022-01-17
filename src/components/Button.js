import React from "react";
import styled from "styled-components";

import { colors } from "./GlobalStyles";

const Button = ({ onClickFunc, children }) => (
  <Wrapper onClick={onClickFunc}>{children}</Wrapper>
);

const Wrapper = styled.button`
  background: ${colors.off_blue};
  border: 1px solid ${colors.red};
  border-radius: 4px;
  color: ${colors.fuchsia};
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 16px 8px;
  text-transform: uppercase;
  margin: 8px;
  width: 120px;
  transition: 200ms ease-in-out;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:hover {
    background-color: ${colors.hover_bg_clr};
    color: ${colors.off_blue};
  }
`;

export default Button;
