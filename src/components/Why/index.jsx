import { Container, Content, Wrapper, Icon } from "./style";

const Why = () => {
  return (
    <Container>
      <Content>
        <h1 className="title">Why CHoose Us</h1>
        <div className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>
      </Content>
      <Wrapper>
        <Content>
          <Icon.Maps />
          <div className="subTitle">Financing Made Easy</div>
          <div className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aut
            reiciendis ut cupiditate repudiandae? Labore nam inventore rem
            aliquid voluptatum!
          </div>
        </Content>
        <Content>
          <Icon.House />
          <div className="subTitle">Wide Range Of Properties</div>
          <div className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aut
            reiciendis ut cupiditate repudiandae? Labore nam inventore rem
            aliquid voluptatum!
          </div>
        </Content>
        <Content>
          <Icon.Calculator />
          <div className="subTitle">Financing Made Easy</div>
          <div className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aut
            reiciendis ut cupiditate repudiandae? Labore nam inventore rem
            aliquid voluptatum!
          </div>
        </Content>
        <Content>
          <Icon.Maps />
          <div className="subTitle">See Neighborhoods</div>
          <div className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aut
            reiciendis ut cupiditate repudiandae? Labore nam inventore rem
            aliquid voluptatum!
          </div>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Why;
