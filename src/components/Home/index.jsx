import Carousel from "../Carousel";
import Category from "../Category";
import Why from "../Why";
import { Container } from "./style";
import { Recommended } from "./../Recommended/index";
import Recent from "../Recent";
import Banner from "../Banner";

const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recommended />
      <Why />
      <Category />
      <Banner />
      <Recent />
    </Container>
  );
};

export default Home;
