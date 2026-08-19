/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries

  await knex.schema.raw("TRUNCATE bike CASCADE");
  await knex("bike").del();

  const bikeSeed = [
    {
      id: 1,
      make: "Specialized",
      model: "Rockhopper",
      style: "MTB",
      year: "2026",
      rider_id: 1,
      bike_components_id: 1,
    },
    {
      id: 2,
      make: "Trek",
      model: "Madone Carbon",
      style: "Road",
      year: "2026",
      rider_id: 2,
      bike_components_id: 2,
    },
    {
      id: 3,
      make: "Ozark Trail",
      model: "M.2",
      style: "MTB",
      year: "2025",
      rider_id: 3,
      bike_components_id: 3,
    },
  ];

  const bikeData = [...bikeSeed];

  const bikeMakes = [
    "Spoke & Mirrors",
    "Wheelie Bad Bikes",
    "Handlebar None",
    "Two Tired Cycles",
    "Pedal to the Meddle",
    "Chain Reaction",
    "Derailleur Swift",
    "Tour de Farce",
    "Crank Yankers",
    "Freewheelin' Fools",
    "Sprocket Science",
    "Breaking Cadence",
    "Unstable Cycles",
  ];

  const bikeModels = [
    "Mongoose",
    "Beaver Creek",
    "Starburst",
    "Ground Pounder",
    "Mud Blaster",
    "Kona Stuff",
    "Kona Roast",
    "Smut Raven",
    "Pechango Crunk",
    "Blitz Thunder",
    "Sir Hurt Locker",
    "She Shredder",
    "Stompatron",
  ];

  const bikeStyles = [
    "MTB",
    "Road",
    "Gravel",
    "Touring",
    "Fixed-Gear",
    "City",
    "Cargo",
  ];

  const bikeYear = [2001, 2006, 1987, 2025, 2026, 2021, 1991];

  let growThis = 4;

  for (let i = 0; i < 1000; i++) {
    bikeSeed.forEach((bike) => {
      const randomMake =
        bikeMakes[Math.floor(Math.random() * bikeMakes.length)];
      const randomModel =
        bikeModels[Math.floor(Math.random() * bikeModels.length)];
      const randomStyle =
        bikeStyles[Math.floor(Math.random() * bikeStyles.length)];
      const randomYear = bikeYear[Math.floor(Math.random() * bikeYear.length)];
      const randomRider = Math.floor(Math.random() * 3003) + 1;

      const randomComponent = Math.floor(Math.random() * 3003) + 1;

      bikeData.push({
        ...bike,
        id: growThis,
        make: randomMake,
        model: randomModel,
        style: randomStyle,
        year: randomYear,
        rider_id: randomRider,
        bike_components_id: randomComponent,
      });

      growThis++;
    });
  }

  await knex("bike").insert(bikeData);
};
