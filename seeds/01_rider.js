/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("rider").del();
  await knex("rider").insert([
    { id: 1, name: "Cliff" },
    { id: 2, name: "Phillip" },
    { id: 3, name: "Arlene" },
  ]);
};
