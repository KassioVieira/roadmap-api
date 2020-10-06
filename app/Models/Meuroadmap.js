"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Meuroadmap extends Model {
  user() {
    return this.belongsTo("App/Models/User");
  }

  roadmap() {
    return this.belongsToMany("App/Models/Roadmap", "roadmap_id");
  }
}

module.exports = Meuroadmap;
