import React from "react";
import "./App.css";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import birthdayImage from "./sayyid.jpg"; // Make sure to add an image file in the src folder

function App() {
  const { width, height } = useWindowSize();

  return (
    <div className="App">
      <Confetti width={width} height={height} />
      <div className="birthday-card">
        <img src={birthdayImage} alt="Birthday Cake" className="birthday-img" />
        <h1>🎉 Happy  Birthday  Nigga! 🎂</h1>
        <p>Semoga panjang umur !</p>
        <p>💖 From your baby to you 💖</p>
      </div>
    </div>
  );
}

export default App;

