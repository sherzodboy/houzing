import { Container, Content, Details, Icons, Img, Divider } from "./style";
import noimg from "./../../assets/img/noimg.jpeg";

const HouseCard = ({ data = {} }) => {
  const {
    attachments,
    salePrice,
    price,
    houseDetails,
    address,
    city,
    country,
    description,
    category,
  } = data;

  return (
    <Container>
      <Img src={(attachments && attachments[0]?.imgPath) || noimg} />
      <Content>
        <div className="subTitle inline">
          {city}, {country}, {description}
        </div>
        <div className="info">
          {address || "Quincy St, Brooklyn, NY, USA"}{" "}
          {category?.name || "Category"} {houseDetails?.room || 0} {" rooms"}
        </div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">Bed {houseDetails?.beds || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">Bath {houseDetails?.bath || 0} </div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className="info">Garage {houseDetails?.garage || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">Ruler {houseDetails?.ruler || 0}kv</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer>
        <Details.Item footer>
          <div className="info">${salePrice || 0}/mo</div>
          <div className="subTitle">${price || 0} /mo</div>
        </Details.Item>
        <Details.Item row>
          <Icons.Resize />
          <Icons.Love />
        </Details.Item>
      </Content>
    </Container>
  );
};

export default HouseCard;
