/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.schema.raw("TRUNCATE bike CASCADE");
  await knex("bike").del();
  await knex("bike").insert([
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
  ]);
};
