import React from "react";
import styled from "styled-components";
import { colors } from "./GlobalStyles";

const DeadMan = ({ wrongGuesses }) => {
  return (
    <SVG>
      {/* Structure */}
      <line x1="60" y1="20" x2="200" y2="20" className="structure" />
      <line x1="200" y1="20" x2="200" y2="70" className="structure" />
      <line x1="60" y1="20" x2="60" y2="400" className="structure" />
      <line x1="45" y1="385" x2="300" y2="385" className="structure" />
      {/* head */}
      <circle
        cx="200"
        cy="115"
        r="45"
        className={wrongGuesses.length >= 1 ? "head" : ""}
      />
      {/* body */}
      <line
        x1="200"
        y1="160"
        x2="200"
        y2="260"
        className={wrongGuesses.length >= 2 ? "body" : ""}
      />
      {/* Arms */}
      <line
        x1="200"
        y1="200"
        x2="120"
        y2="120"
        className={wrongGuesses.length >= 3 ? "left-arm" : ""}
      />
      <line
        x1="200"
        y1="200"
        x2="280"
        y2="120"
        className={wrongGuesses.length >= 4 ? "right-arm" : ""}
      />
      {/* Legs */}
      <line
        x1="200"
        y1="260"
        x2="120"
        y2="350"
        className={wrongGuesses.length >= 5 ? "left-leg" : ""}
      />
      <line
        x1="200"
        y1="260"
        x2="280"
        y2="350"
        className={wrongGuesses.length >= 6 ? "right-leg" : ""}
      />
      {/* hands */}
      <circle
        cx="113"
        cy="111"
        r="10"
        className={wrongGuesses.length >= 7 ? "left-hand" : ""}
      />
      <circle
        cx="285"
        cy="111"
        r="10"
        className={wrongGuesses.length >= 8 ? "right-hand" : ""}
      />
      {/* feet */}
      <ellipse
        cx="112"
        cy="338"
        rx="10"
        ry="18"
        className={wrongGuesses.length >= 9 ? "left-foot" : ""}
      />
      <ellipse
        cx="288"
        cy="338"
        rx="10"
        ry="18"
        className={wrongGuesses.length >= 10 ? "right-foot" : ""}
      />
    </SVG>
  );
};

const SVG = styled.svg`
  height: 400px;
  width: 320px;
  fill: transparent;
  stroke: transparent;
  stroke-width: 4px;
  stroke-linecap: round;

  .structure {
    stroke: ${colors.yellow};
  }

  .head,
  .body,
  .left-arm,
  .right-arm,
  .left-leg,
  .right-leg,
  .left-hand,
  .right-hand,
  .left-foot,
  .right-foot {
    stroke: ${colors.yellow};
  }
`;

export default DeadMan;
