const myGameArray = [
    {
      title: "Rummikub",
      type: "Tile Game",
      numberofPlayers: "2-4 players",
      rating: "5/5 stars",
      shortDescription: "A classic tile game that blends strategy, luck, and quick thinking."
    },
    {
      title: "Uno",
      type: "Card Game",
      numberofPlayers: "2-10 players",
      rating: "3/5 stars",
      shortDescription: "A popular, fast-paced card game where the goal is to get rid of all your cards."
    },
    {
      title: "Phase 10",
      type: "Card Game",
      numberofPlayers: "2-6 players",
      rating: "4/5 stars",
      shortDescription: "A rummy-style card game where players complete ten phases."
    },
    {
      title: "Sorry",
      type: "Board Game",
      numberofPlayers: "2-4 players",
      rating: "4/5 stars",
      shortDescription: "A racing board game where players move pawns from Start to Home."
    }
  ];
  
  const whichGame = window.prompt("I have 4 games in my collection. Pick a number between 1 and 4!");
  
  const selectedIndex = Number(whichGame) - 1;
  window.alert(
    "You selected " + myGameArray[selectedIndex].title + ", which is a " + myGameArray[selectedIndex].type + ". " + myGameArray[selectedIndex].numberofPlayers + " can play at once. " +
    "Here is a short description of this game: " + myGameArray[selectedIndex].shortDescription + " Rating: " + myGameArray[selectedIndex].rating);
  