import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 425px;
  height: 250px;

  .slick-dots {
    bottom: -15px;
    display: flex;
    justify-content: center;
    gap: 5px;
  }
  .slick-dots li {
    width: 10px;
    height: 10px;
  }
  .slick-dots li button:before {
    color: #8e8e8e;
  }
  .slick-dots li.slick-active button:before {
    color: #fc5aa8;
  }
`;
