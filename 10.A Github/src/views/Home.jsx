import { useState } from "react";
import { nanoid } from "nanoid";
import Masthead from "../Masthead/Masthead";
import ItemCard from "../ItemCard/ItemCard";
import { NewDollForm } from "../NewDollForm/NewDollForm";
import deckData from "../assets/deck-data.json";


export function Home(){
    const [decks, setDecks] = useState(deckData);
      
      function addAGDDeck(data) {
        const newId = nanoid(6);
        const newDoll = {...data, id: newId};
        console.log(newDoll);
        setDecks([...decks, newDoll])
      }
      function deleteCard(name) {
        const updatedArray = decks.filter((agdDeck) => {
          return agdDeck.name !== name;
        })
        setDecks(updatedArray)
      }
    
      function duplicateCard(name) {
        const matchingDeck = decks.find((agdDeck) => {
          return agdDeck.name === name
        });
        const updatedDeck = {...matchingDeck}
        setDecks([...decks, updatedDeck])
    }
return(
    <div className="page">
          <Masthead />
          <div className = "collection">
          {decks.map((agdCollection) => {
            return (
              <ItemCard 
              key = {agdCollection.id} 
              deleteFn={deleteCard}
              duplicateFn={duplicateCard}
              {...agdCollection}/>
            )
          })}
        
          
          </div>
          <NewDollForm addDollFn={addAGDDeck} />
        </div>
);
}