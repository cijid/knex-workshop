/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("bike", (table) => {
    table.increments("id");
    table.string("make", 250);
    table.string("model", 250);
    table.string("style", 250);
    table.integer("year", 250);
    table.integer("rider_id");
    table.foreign("rider_id").references("rider.id");
    table.integer("bike_components_id");
    table.foreign("bike_components_id").references("bike_components.id");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("bike");
};
