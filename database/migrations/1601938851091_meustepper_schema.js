"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MeustepperSchema extends Schema {
  up() {
    this.create("meusteppers", (table) => {
      table.increments();
      table
        .integer("meuroadmap_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("meuroadmaps")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("status", 100).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("meusteppers");
  }
}

module.exports = MeustepperSchema;
