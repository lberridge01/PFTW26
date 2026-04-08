import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
import "../views/DeckDetail.css";
export function DeckDetail({data}) {
    const { id } = useParams();
    const selectedDoll = data.find((deck) => deck.id === id);
    return (
        <div className = "deckDetail">
        <Link to="/"> Return to Deck List</Link>
            <h1>{selectedDoll.name}</h1>
            <h2>{selectedDoll.year}</h2>
            <h2>{selectedDoll.location}</h2>
            <img src={selectedDoll.image} alt={selectedDoll.name} />
            <p>{selectedDoll.background}</p>
        </div>
        
    )
}
DeckDetail.PropTypes = { 
    data: PropTypes.array
}