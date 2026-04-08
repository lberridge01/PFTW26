import PropTypes from "prop-types";
import "./ItemCard.css";
import trash from "../assets/trash.svg";
import copy from "../assets/plus.svg";
import { Link } from "react-router-dom";

export default function ItemCard({
    id,
    name,
    year,
    location,
    history,
    background,
    image,
    duplicateFn,
    deleteFn
}) {
    return (
        <div className = "agdCard">
            <div className="dollYear">Time Period: {year}</div>
            <div className="location">{location}</div>
            <div className="cardImg">
            <img src={image} alt={name} />
            </div>
            <div className="cardTitle">
                <Link to={`${id}`}>{name}</Link>
            </div>
            <div className="history">Historical Significance: {history}</div>
            <div className="dollBackground">{background}</div>
            <div className="actions">
                <a href="#" onClick={(evt) => {
                    evt.preventDefault();
                    deleteFn(name)
                }}> <img src={trash}></img></a> 
                <a href="#" onClick={(evt) => {
                    evt.preventDefault();
                    duplicateFn(name)
                }}><img src={copy}></img></a
                ></div>
        </div>
    )
}
ItemCard.propTypes = {
    name: PropTypes.string,
    year: PropTypes.string,
    location: PropTypes.string,
    history: PropTypes.string,
    background: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.string,
    duplicateFn: PropTypes.func,
    deleteFn: PropTypes.func
}