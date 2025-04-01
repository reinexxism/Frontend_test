import React from "react";
import {
  Button,
  Container,
  DateArea,
  ImgArea,
  TextArea,
  P,
  EmptyImgArea,
} from "../styles/SliderContentStyle";

export default function SliderContent({ text, date, imgPath, linkPath }) {
  const Content = (
    <Container>
      {imgPath ? (
        <ImgArea src={imgPath} />
      ) : (
        <EmptyImgArea>사진 영역</EmptyImgArea>
      )}
      <TextArea>
        <P>{text}</P>
        <Button>투표하기</Button>
      </TextArea>
      <DateArea>{date}</DateArea>
    </Container>
  );
  return linkPath ? (
    <a
      href={linkPath}
      target="_blank"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {Content}
    </a>
  ) : (
    Content
  );
}
