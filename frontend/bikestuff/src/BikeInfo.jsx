import { useState } from "react";

function BikeInfo({ bike, setBike }) {
  const [newModel, setNewModel] = useState("");

  const deleteBike = () => {
    fetch(`http://localhost:8081/bikes/${bike.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Deleted bike:", data);
        setBike(null);
      });
  };

  const updateModel = () => {
    fetch(`http://localhost:8081/bikes/${bike.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: newModel,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setBike({
          ...bike,
          model: data[0].model,
        });
        setNewModel("");
      });
  };

  return (
    <div>
      <h2>
        <p>{bike.model}</p>
        <p>Manufactured by {bike.make}</p>
      </h2>

      <p>ID: {bike.id}</p>
      <p>Style: {bike.style}</p>
      <p>Year: {bike.year}</p>
      <p>Rider: {bike.name}</p>
      <p>Nationality: {bike.nationality}</p>

      <div>
        <input
          type="text"
          placeholder="New bike model"
          value={newModel}
          onChange={(event) => setNewModel(event.target.value)}
        />

        <button onClick={updateModel}>Change Model</button>
      </div>

      <button onClick={deleteBike}>Delete Bike</button>

      <h3>Components</h3>

      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Model</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Frame</td>
            <td>{bike.frame}</td>
          </tr>
          <tr>
            <td>Fork</td>
            <td>{bike.fork}</td>
          </tr>
          <tr>
            <td>Crankset</td>
            <td>{bike.crankset}</td>
          </tr>
          <tr>
            <td>Chain</td>
            <td>{bike.chain}</td>
          </tr>
          <tr>
            <td>Cassette</td>
            <td>{bike.cassette}</td>
          </tr>
          <tr>
            <td>Shifter</td>
            <td>{bike.shifter}</td>
          </tr>
          <tr>
            <td>Derailleur</td>
            <td>{bike.derailleur}</td>
          </tr>
          <tr>
            <td>Handlebar</td>
            <td>{bike.handlebar}</td>
          </tr>
          <tr>
            <td>Stem</td>
            <td>{bike.stem}</td>
          </tr>
          <tr>
            <td>Brakes</td>
            <td>{bike.brakes}</td>
          </tr>
          <tr>
            <td>Pedals</td>
            <td>{bike.pedals}</td>
          </tr>
          <tr>
            <td>Wheel</td>
            <td>{bike.wheel}</td>
          </tr>
          <tr>
            <td>Tires</td>
            <td>{bike.tires}</td>
          </tr>
          <tr>
            <td>Saddle</td>
            <td>{bike.saddle}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BikeInfo;
