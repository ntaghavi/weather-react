import React from "react";
export default function CityData({ city, data }) {
  return (
    <div className="col-6 p-3">
      <h1 className="card-title day" id="city-name">
        {city}
      </h1>

      <p className="card-subtitle w-stat">
        <span id="city-current-description" className="">
          {" "}
          {data.weekDay} {data.clock}
        </span>
      </p>
      <p className="card-subtitle w-stat">
        <span id="city-current-description" className="mb-5">
          {" "}
          {data.description}{" "}
        </span>
      </p>
      <div className="float-left">{data.icon}</div>
    </div>
  );
}
