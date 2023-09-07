import React from "react";
export default function Footer() {
  return (
    <div>
      <p className="footer">
        Coded by <span>Nazanin TQV</span>
      </p>
      <p className="footer">
        To See my GitHub Repository click
        <a
          href="https://github.com/ntaghavi/weather-react"
          target="_blank"
          rel="noreferrer"
        >
            {" "}
          Here
        </a>
        !
      </p>
    </div>
  );
}
