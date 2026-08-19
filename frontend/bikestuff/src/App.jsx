import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

const bikesURL = "http://localhost:8081/bikes";

function App() {
  const [bikes, setBikes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(bikesURL)
      .then((response) => response.json())
      .then((bikeData) => {
        setBikes(bikeData);
      });
  }, []);
  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </>
  );
}

export default App;
