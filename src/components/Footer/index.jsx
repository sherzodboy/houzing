import { Container, Content, Icon } from "./style";

const Footer = () => {
  return (
    <Container>
      <Content>
        <Content.Title>Contact Us</Content.Title>
        <Content.Item>
          <Icon.Email /> 329 Queensberry Street, North Melbourne VIC 3051,
          Australia.
        </Content.Item>
        <Content.Item>
          {" "}
          <Icon.Phone /> +998-(91) 584-27-22
        </Content.Item>
        <Content.Item>
          {" "}
          <Icon.Email /> kholmamatovsh09@gmail.com
        </Content.Item>
      </Content>
      <Content>
        <Content.Title>Discover</Content.Title>
        <Content.Item>Bangkok - Thailand</Content.Item>
        <Content.Item>Dubai - United Arab Emirates</Content.Item>
        <Content.Item>Cairo - Egypt</Content.Item>
        <Content.Item>Ankara - Turkey</Content.Item>
      </Content>
      <Content>
        <Content.Title>Lists By Languages</Content.Title>
        <Content.Item>Uzbek</Content.Item>
        <Content.Item>Turkish</Content.Item>
        <Content.Item>English</Content.Item>
        <Content.Item>Russia</Content.Item>
        <Content.Item>Arab</Content.Item>
      </Content>
      <Content>
        <Content.Title>See Neighborhoods</Content.Title>
        <Content.Item>t.me/sherzod2722</Content.Item>
      </Content>
    </Container>
  );
};

export default Footer;
