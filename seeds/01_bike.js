/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("bike").del();
  await knex("bike").insert([
    {
      id: 1,
      make: "Specialized",
      model: "Rockhopper",
      style: "MTB",
      year: "2026",
    },
    {
      id: 2,
      make: "Trek",
      model: "Madone Carbon",
      style: "Road",
      year: "2026",
    },
    { id: 3, make: "Ozark Trail", model: "M.2", style: "MTB", year: "2025" },
  ]);
};
