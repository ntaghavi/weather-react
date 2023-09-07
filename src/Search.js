import React, { useState } from "react";
import "./Search.css";
import Display from "./Display";
function Search() {
  let [city, setCity] = useState("");
  let [sval, setSval] = useState("");
  let [show, setShow] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setSval(city);
    setShow(true);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="search-eng">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="search-inp"
          onChange={updateCity}
          placeholder="Type city name"
        />
        <input type="submit" className="sub-btn" />
      </form>
      <Display show={show} city={sval} />
    </div>
  );
}
export default Search;
