import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import useRequest from "../../hooks/useRequest";
import { Input, Button } from "./../Generic/index";
import nouser from "./../../assets/img/nouser.jpeg";
import noimg from "./../../assets/img/noimg.jpeg";
import {
  Blur,
  Container,
  Content,
  Description,
  Details,
  Icons,
  ImageContainer,
  ImgContainer,
  Section,
  User,
  Wrapper,
} from "./style";
import { Checkbox } from "antd";
import Yandex from "../Generic/Yandex";
import Recent from "./../Recent/index";

// const { REACT_APP_BASE_URL: url } = process.env;

const HouseItem = () => {
  const [data, setData] = useState({});
  const params = useParams();
  // const request = useRequest();

  useEffect(() => {
    fetch(`https://houzing-app.herokuapp.com/api/v1/houses/id/${params?.id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
        window.scrollTo(0, 0);
      });
  }, [params?.id]);

  return (
    <React.Fragment>
      <ImageContainer>
        <ImageContainer.Main
          src={(data?.attachments && data?.attachments[0]?.imgPath) || noimg}
          alt="test"
        />
        <ImgContainer>
          {data?.attachments &&
            data?.attachments?.slice(1, 5).map((value, index) => {
              return data?.attachments?.length > 5 && index === 3 ? (
                <Blur.Container>
                  <ImageContainer.Subimg
                    key={value.id}
                    src={value?.imgPath}
                    alt="test"
                  />
                  <Blur>+{data?.attachments?.length - 5}</Blur>
                </Blur.Container>
              ) : (
                <ImageContainer.Subimg
                  key={value.id}
                  src={value?.imgPath}
                  alt="test"
                />
              );
            })}
        </ImgContainer>
      </ImageContainer>
      <Wrapper>
        <Container flex={3}>
          <Section>
            <div>
              <Content.Title large>{data?.name}</Content.Title>
              <div className="info">
                {data?.city}, {data?.address}, {data?.country}
              </div>
            </div>
            <Content flex>
              <Icons.Share /> <Icons.Title>Share</Icons.Title>
              <Icons.Love /> <Icons.Title>Love</Icons.Title>
            </Content>
          </Section>
          <Section>
            <Details>
              <Icons.Bed />
              <Details.Title>Bed {data?.houseDetails?.beds || 0}</Details.Title>
              <Icons.Bath />
              <Details.Title>
                Bath {data?.houseDetails?.bath || 0}{" "}
              </Details.Title>
              <Icons.Garage />
              <Details.Title>
                Garage {data?.houseDetails?.garage || 0}
              </Details.Title>
              <Icons.Ruler />
              <Details.Title>
                Ruler {data?.houseDetails?.ruler || 0}kv
              </Details.Title>
            </Details>
            <Content>
              <Content flex>
                <Details.Title>
                  <del>${data?.price || 0} /mo</del>
                </Details.Title>
                <h2 className="title"> ${data?.salePrice || 0}/mo</h2>
              </Content>
              <div style={{ textAlign: "end" }} className="info">
                {data?.user?.firstname}
              </div>
            </Content>
          </Section>
          <Content.Title>Description</Content.Title>
          <Description>{data?.description}</Description>
          <Content.Title mb={20}>Feature</Content.Title>
          <Section>
            <Container gap={25}>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Air Conditioning {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Title>
                  Barbeque {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bath />
                <Details.Title>
                  Dryer {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Garage />
                <Details.Title>
                  Gym {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>
            <Container gap={25}>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Air Conditioning {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Title>
                  Barbeque {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bath />
                <Details.Title>
                  Dryer {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Garage />
                <Details.Title>
                  Gym {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>
            <Container gap={25}>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Air Conditioning {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Title>
                  Barbeque {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bath />
                <Details.Title>
                  Dryer {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Garage />
                <Details.Title>
                  Gym {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>
            <Container gap={25}>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Air Conditioning {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Title>
                  Barbeque {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bath />
                <Details.Title>
                  Dryer {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Garage />
                <Details.Title>
                  Gym {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>
          </Section>
        </Container>
        <Container className="user" flex={1}>
          <Section style={{ justifyContent: "flex-start" }}>
            <User.Img src={nouser} alt={"user image"} />
            <Content>
              <div className="subTitle">SherzodBoy</div>
              <div className="info">123 456 789</div>
            </Content>
          </Section>
          <Input placeholder="Name" />
          <Input placeholder="Phone" />
          <Input placeholder="Email" />
          <Input placeholder="Message" />
          <Checkbox>By submitting this form I agree to Terms of Use</Checkbox>
          <Button width={"%"}>Send request</Button>
        </Container>
      </Wrapper>
      <Yandex />
      <Recent />
    </React.Fragment>
  );
};

export default HouseItem;
