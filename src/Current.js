import React from "react";
import CityData from "./CityData";
import CurrentRight from "./CurrentRight";
export default function Current({ city, data }) {
  return (
    <div className="current d-flex flex-row justify-content-evenly card">
      <CityData city={city} data={data} />
      <CurrentRight data={data} />
    </div>
  );
}
