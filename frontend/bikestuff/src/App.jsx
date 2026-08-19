import { useState } from "react";
import Navbar from "./Navbar";
import BikeInfo from "./BikeInfo";
import "./App.css";

function App() {
  const [bike, setBike] = useState(null);

  const getBike = (bikeID) => {
    fetch(`http://localhost:8081/bikes/${bikeID}`)
      .then((response) => response.json())
      .then((bikeData) => {
        setBike(bikeData[0]);
      })
      .catch((error) => {
        console.error("Error fetching bike:", error);
      });
  };

  return (
    <>
      <Navbar getBike={getBike} />

      {bike && <BikeInfo bike={bike} setBike={setBike} />}
    </>
  );
}

export default App;
