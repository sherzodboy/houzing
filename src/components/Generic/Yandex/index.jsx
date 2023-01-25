import React from "react";
import { YMaps, Map } from "react-yandex-maps";

const mapStyle = {
  position: "relative",
  left: 0,
  top: 0,
  width: "100wh",
  height: "50vh",
  overflow: "hidden",
};

const Yandex = ({ center }) => {
  return (
    <YMaps
      query={{ apiKey: "afbb60c1-0761-48a5-b821-b566bf220d8b", lang: "EN" }}
    >
      <Map
        style={mapStyle}
        defaultState={{ center: center || [37.2611, 67.3086], zoom: 13 }}
      ></Map>
    </YMaps>
  );
};

export default Yandex;
