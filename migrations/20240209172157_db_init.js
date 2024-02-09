/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.raw(`CREATE TABLE if not exists dummy_data (
    id INTEGER PRIMARY KEY,
    description TEXT,
    amount INTEGER
);
commit;`);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.raw(`DROP TABLE if exists dummy_data; 
 commit;`);
};
