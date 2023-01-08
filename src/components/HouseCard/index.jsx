import { Container, Content, Details, Icons, Img, Divider } from "./style";
import noimg from "./../../assets/img/noimg.jpeg";

const HouseCard = ({ url, title, bed, bath, garage, ruler, info }) => {
  return (
    <Container>
      <Img src={url || noimg} />
      <Content>
        <div className="subTitle">{title || "New Apartment Nice View"}</div>
        <div className="info">{info || "Quincy St, Brooklyn, NY, USA"}</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">Bed {bed || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">Bath {bath || 0} </div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className="info">Garage {garage || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">Ruler {ruler || 0}</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer>
        <Details.Item footer>
          <div className="info">$2.800/mo</div>
          <dib className="subTitle">$7,500 /mo</dib>
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
