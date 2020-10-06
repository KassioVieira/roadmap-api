"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SteppersSchema extends Schema {
  up() {
    this.create("steppers", (table) => {
      table.increments();
      table
        .integer("roadmap_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("roadmaps")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("description", 1000).notNullable();
      table.string("type", 100).notNullable();
      table.string("title", 100).notNullable();
      table.string("url", 3000).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("steppers");
  }
}

module.exports = SteppersSchema;
