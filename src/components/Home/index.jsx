import Carousel from "../Carousel";
import HouseCard from "../HouseCard";
import CategoryCard from "../CategoryCard";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Carousel />
      <HouseCard />
      <CategoryCard />
    </Container>
  );
};

export default Home;
