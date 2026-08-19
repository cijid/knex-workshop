/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("bike_components", (table) => {
    table.increments("id");
    table.string("crankset", 250);
    table.string("fork", 250);
    table.string("chain", 250);
    table.string("shifter", 250);
    table.string("handlebar", 250);
    table.string("derailleur", 250);
    table.string("pedals", 250);
    table.string("model", 250);
    table.string("brakes", 250);
    table.string("tires", 250);
    table.string("frame", 250);
    table.string("wheel", 250);
    table.string("saddle", 250);
    table.string("cassette", 250);
    table.string("stem", 250);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("bike_components");
};
