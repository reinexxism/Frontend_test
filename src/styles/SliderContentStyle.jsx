import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  width: 410px;
  height: 230px;
  border-radius: 10px;
  border: 1px solid #c9c9c9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgArea = styled.img`
  margin-bottom: 5px;
  width: 100%;
  height: 75%;
  border-radius: 10px 10px 0 0;
`;

export const EmptyImgArea = styled.div`
  margin-bottom: 5px;
  width: 100%;
  height: 75%;
  border-radius: 10px 10px 0 0;
  background-color: #e7e7e7;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
`;

export const TextArea = styled.div`
  padding: 0 10px;
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3px;
`;

export const Button = styled.button`
  width: 18%;
  height: 80%;
  border-radius: 30px;
  border: 1px solid #fc63ac;
  color: #fc63ac;
  font-weight: bold;
  background-color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

export const P = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

export const DateArea = styled.div`
  padding: 0 10px;
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  font-size: 11px;
  margin-bottom: 5px;
`;
