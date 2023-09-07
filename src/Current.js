import React from "react";
import CityData from "./CityData";
import EmojiSide from "./EmojiSide";
export default function Current({ city, data }) {
  return (
    <div className="current d-flex flex-row justify-content-evenly card">
      <CityData city={city} data={data} />
      <EmojiSide data={data} />
    </div>
  );
}
