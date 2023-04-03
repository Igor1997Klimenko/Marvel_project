import styled from "styled-components";

export const BoxContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentBlock = styled.div`
  background: #ffffffdb;
  width: 600px;
  height: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  -webkit-box-shadow: inset -1px 0px 23px 0px rgba(0,0,0,1);
  -moz-box-shadow: inset -1px 0px 23px 0px rgba(0,0,0,1);
  box-shadow: inset -1px 0px 23px 0px rgba(0,0,0,1);

  @media (max-width: 568px) {
    max-width: 85%;
  }
`;

export const Image = styled.img`
  height: 100vh;
  width: 100%;
`;

export const BtnBack = styled.button`
  border: 1px solid #aaaaaa;
  background: #969797;
  border-radius: 5px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  padding: 5px;
  cursor: pointer;
  transition: all 0.5s ease 0s;

  &:hover{
    background: #cfcfcfd1;
  }
}
`;

export const Rght = styled.span`
  padding-right: 5px;
`;