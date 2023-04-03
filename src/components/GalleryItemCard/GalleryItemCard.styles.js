import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 240px;
  margin: 15px;
  margin-bottom: 25px;
  background: #edfad7;
  border-radius: 10px;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  border: 0px solid #000000;

  &:hover{
    transform: scale(1.05);
  }

  @media (max-width: 568px) {
    width: 85%;
  }
`;

export const LinkPage = styled.a`
  display: flex;
  alignItems: center;
  textDecoration: none;
  padding: 5px;
  background: red;
  borderRadius: 5px;
`;

export const BlockCard = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const TitleFilms = styled.span`
  padding-bottom: 5px;
`;

