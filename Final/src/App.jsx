import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Masthead from "./Masthead/Masthead";
import ItemCard from "./ItemCard/ItemCard";
import { NewSketchForm } from "./NewSketchForm/NewSketchForm";
import { nanoid } from "nanoid";

import FlowerSketch from "./sketches/FlowerSketch/FlowerSketch";
import IceSketch from "./sketches/Ice/IceSketch";
import ThunderSketch from "./sketches/Thunderstorm/ThunderSketch";
import SpaceSketch from "./sketches/Space/SpaceSketch";
import MeditationSketch from "./sketches/PerlinNoise/PerlinSketch";

import Ice from "./assets/Ice.png";
import Meditation from "./assets/Meditation.png";
import Space from "./assets/Space.png";
import Thunder from "./assets/Thunderstorm.png";
import Flower from "./assets/Flower.png";

function Home() {
  const [decks, setDecks] = useState([
    {
      name: "Cracking Ice",
      description:
        "A field of small points that swirl across the screen, like ice slowly cracking. Sound brings the motion to life and gives it crisp energy.",
      image: Ice,
      path: "/ice",
      id: "1",
    },
    {
      name: "Thunderstorm",
      description:
        "A playful storm scene where rain falls across the screen and shifts with your mouse, letting you “steer” the wind. Lightning flashes and thunder sounds bring bursts of energy, making the weather feel alive and interactive.",
      image: Thunder,
      path: "/thunderstorm",
      id: "2",
    },
    {
      name: "Sounds of Space",
      description:
        "A field of particles moves and swirls in smooth, flowing patterns like space in motion. Soft colors and space sounds create a calm, dreamy feeling.",
      image: Space,
      path: "/space",
      id: "3",
    },
    {
      name: "Abstract",
      description:
        "An abstract field of particles flows and shifts in smooth, looping motion across the screen. Bright colors and soft movement create a calm, uplifting, meditative feel.",
      image: Meditation,
      path: "/meditation",
      id: "4",
    },
    {
      name: "Blooming Flower",
      description:
        "A garden comes to life as colorful flowers bloom across the screen at their own pace using animated shapes, looping patterns, and smooth motion. Soft sound and layered petal effects creates a real life feel.",
      image: Flower,
      path: "/flower",
      id: "5",
    },
  ]);

  function addSketchDeck(data) {
    const newId = nanoid(6);
    const newSketch = { ...data, id: newId };
    setDecks([...decks, newSketch]);
  }

  function deleteCard(name) {
    const updatedArray = decks.filter((sketchDeck) => {
      return sketchDeck.name !== name;
    });
    setDecks(updatedArray);
  }

  function duplicateCard(name) {
    const matchingDeck = decks.find((sketchDeck) => {
      return sketchDeck.name === name;
    });

    const updatedDeck = { ...matchingDeck, id: nanoid(6) };
    setDecks([...decks, updatedDeck]);
  }

  return (
    <div className="page">
      <Masthead />

      <div className="collection">
        {decks.map((sketchCollection) => {
          return (
            <ItemCard
              key={sketchCollection.id}
              deleteFn={deleteCard}
              duplicateFn={duplicateCard}
              {...sketchCollection}
            />
          );
        })}
      </div>

      <NewSketchForm addSketchFn={addSketchDeck} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flower" element={<FlowerSketch />} />
        <Route path="/ice" element={<IceSketch />} />
        <Route path="/thunderstorm" element={<ThunderSketch />} />
        <Route path="/space" element={<SpaceSketch />} />
        <Route path="/meditation" element={<MeditationSketch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
