import styled from "styled-components";

const Container = styled.div`
  border-radius: 3px;
  width: 100%;
  max-width: 280px;
  min-width: 230px;
  // height: 380px;
  min-height: 350px;
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
`;

const Img = styled.img`
  width: 100%;
  border-radius: 3px;
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
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  color: #fff;
  border-radius: 3px;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
`;

const Icons = styled.div``;

export { Container, Img, Content, Icons, Blur };
