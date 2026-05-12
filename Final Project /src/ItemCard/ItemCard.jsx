import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./ItemCard.css";

import trash from "../assets/trash.svg";
import copy from "../assets/plus.svg";

export default function ItemCard({
  name,
  description,
  image,
  path,
  duplicateFn,
  deleteFn,
}) {
  return (
    <div className="sketchCard">
      <Link to={path} className="cardLink">
        <div className="cardTitle">{name}</div>

        <div className="cardImg">
          <img src={image} alt={name} />
        </div>

        <div className="description">{description}</div>
      </Link>

      <div className="actions">
        <button
          type="button"
          onClick={(evt) => {
            evt.preventDefault();
            deleteFn(name);
          }}
        >
          <img src={trash} alt="delete" />
        </button>

        <button
          type="button"
          onClick={(evt) => {
            evt.preventDefault();
            duplicateFn(name);
          }}
        >
          <img src={copy} alt="duplicate" />
        </button>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.any,
  path: PropTypes.string,
  duplicateFn: PropTypes.func,
  deleteFn: PropTypes.func,
};
