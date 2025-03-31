import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 425px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 휴대폰 상태바
export const NavbarTop = styled.div`
  padding: 0 10px;
  width: 100%;
  height: 35%;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CurrentTime = styled.p`
  font-size: 14px;
  color: #fff;
`;

export const CurrentState = styled.div`
  font-size: 14px;
  color: #fff;
`;

// 서비스의 상단부분
export const NavbarBottom = styled.div`
  width: 425px;
  height: 65%;
  background-color: #dba8a8;
`;
