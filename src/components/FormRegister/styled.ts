import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonRegister = styled.button`
  width: 100%;
  height: 43px;
  background: #219653;
  border-radius: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  border: none;
  margin-top: 14px;

  :hover {
    filter: brightness(0.9);
  }
`;

export const DivTopRegister = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-top: 35px;
  }
`;

export const ButtonBack = styled(Link)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  text-decoration-line: underline;
  color: #828282;
`;

export const TitleFormRegister = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #333333;
`;

export const Loading = styled.img`
  animation: loading 1.5s infinite;

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const MessageError = styled.span`
  color: #ff577f;
  font-size: 11px;
  display: block;
  margin-top: -6px;
  margin-bottom: 7px;

  @media (min-width: 375px) {
  }

  @media (min-width: 1000px) {
  }
`;
