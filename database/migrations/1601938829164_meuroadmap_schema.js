"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MeuroadmapSchema extends Schema {
  up() {
    this.create("meuroadmaps", (table) => {
      table.increments();
      table
        .integer("roadmap_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("roadmaps")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("status", 100).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("meuroadmaps");
  }
}

module.exports = MeuroadmapSchema;
