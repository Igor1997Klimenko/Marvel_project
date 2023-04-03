import styled from "styled-components";

export const BlockCard = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
`;

export const Result = styled.span`
  display: flex;
  justify-content: center;
  padding: 15px 0 0 0;
  text-decoration: underline;
`;

export const PaginationCard = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BtnLoading = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (min-width: 769px) {
    display: none;
  }
`;