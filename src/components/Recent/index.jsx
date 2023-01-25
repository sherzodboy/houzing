import React, { useEffect, useState } from "react";
import { Container, Content } from "./style";
import HouseCard from "./../HouseCard/index";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "25px",
  slidesToShow: 3,
  speed: 500,
  arrows: true,
  adaptiveHeight: true,
  dots: true,

  appendDots: (dots) => <h1> {dots} </h1>,
};

const Recent = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  return (
    <Container>
      <Content>
        <h1 className="title">Recent Properties for Rent</h1>
        <h1 className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>
      </Content>
      <Slider {...settings}>
        {data.map((value) => {
          return (
            <HouseCard
              key={value?.id}
              gap={15}
              onClick={() => navigate(`/properties/${value?.id}`)}
              data={value}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Recent;
