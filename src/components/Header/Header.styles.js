import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background: aliceblue;
  };

  h1{
    margin: 0;
  }

  ul{
    margin: 0;
  }

  img{
    display: block;
  }
`;



export const Hero = styled.div`
  position: relative;
`;

export const HeaderBg = styled.img`
  height: 100px;
  width: 100%;
  padding: 0;
  border-bottom: 1px solid black;
  background: #ffdb40;
`;

export const BlockSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;