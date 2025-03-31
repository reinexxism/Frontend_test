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

export default function SliderContent({ text, date, imgPath }) {
  return (
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
}
