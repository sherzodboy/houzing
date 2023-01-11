import { Blur, Container, Content, Img } from "./style";
import img1 from "./../../assets/img/house1.png";
import Button from "./../Generic/Button/index";

const Banner = () => {
  return (
    <Container>
      <Img src={img1} />
      <Blur />
      <Content>
        <Content.Title>
          Skyper Pool Partment 112 Glenwood Ave Hydet
        </Content.Title>
        <Button>Read More</Button>
      </Content>
    </Container>
  );
};

export default Banner;
