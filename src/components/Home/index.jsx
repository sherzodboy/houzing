import Carousel from "../Carousel";
import Category from "../Category";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Carousel />
      <Category />
    </Container>
  );
};

export default Home;
