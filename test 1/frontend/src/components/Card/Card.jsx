import React from "react";

function Card({ header, options, text }) {
  return (
    <div className="card">
      <h1 className="card__title">{header}</h1>
      <ul className="card__list">
        {options.map((item) => (
          <li className="card__item">{item}</li>
        ))}
      </ul>
      <p className="card__text">{text}</p>
    </div>
  );
}

export default Card;
