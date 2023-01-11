import { Blur, Container, Content, Img } from "./style";
import noimg from "./../../assets/img/noimg.jpeg";
import category from "./../../assets/img/category.png";

const CategoryCard = ({ onClick, data = {} }) => {
  const { name } = data;

  return (
    <Container onClick={onClick}>
      <Img src={category || noimg} />
      <Blur />
      <Content>{name || "Category name"}</Content>
    </Container>
  );
};

export default CategoryCard;
