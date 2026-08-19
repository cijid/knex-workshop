import { useState } from "react";

function Navbar({ getBike }) {
  const [bikeID, setBikeID] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    getBike(bikeID);
  };

  return (
    <nav>
      <h1>BIKES</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={bikeID}
          onChange={(event) => setBikeID(event.target.value)}
          placeholder="Bike ID"
        />

        <button type="submit">Search</button>
      </form>
    </nav>
  );
}

export default Navbar;
