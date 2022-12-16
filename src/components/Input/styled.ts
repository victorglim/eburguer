import styled from "styled-components";

export const DivInputHeader = styled.div`
  height: 50px;
  width: 100%;
  position: relative;


`;

export const InputHeader = styled.input`
  background: #ffffff;
  border: 2px solid #E0E0E0;
  border-radius: 8px;
  height: 50px;
  width: 95%;
  outline: none;
  padding-left: 10px;
  ::placeholder {
    color: #E0E0E0;
  }

  @media (min-width: 375px) {
    width: 96%;
  }

  @media (min-width: 425px) {
    width: 98%;
  }

  
`;

export const ButtonInput = styled.button`
  width: 49px;
  height: 40px;
  background: #E0E0E0;
  border: 2px solid #E5E1E1;
  border-radius: 8px;
  position: absolute;
  margin-top: -47px;
  right: 0;
  margin-right: 3px;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  z-index: 0;

  @media (min-width: 1000px) {
    margin-top: 8px;
    margin-right: 14px;
  }
  
`;

export const ImgInput = styled.img`
  width: 16px;
  height: 16px;
`;
