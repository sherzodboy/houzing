import styled from "styled-components";
import { ReactComponent as arrow } from "./../../assets/icons/arrow.svg";

const Container = styled.div`
  position: relative;
  height: fit-content;
`;

const Arrow = styled(arrow)`
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  padding: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: ${({ left }) => (!left ? "rotate(90deg)" : "rotate(-90deg)")};
  left: ${({ left }) => !left && "20px"};
  right: ${({ left }) => left && "20px"};
  cursor: pointer;
  :hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  color: #fff;
  align-items: center;
  justify-content: center;
`;

Content.Title = styled.h1`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 30px;
  line-height: 48px;
  max-width: 555px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

export { Container, Arrow, Img, Blur, Content };
