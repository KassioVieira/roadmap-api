"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Meustepper extends Model {
  meuroadmap() {
    return this.belongsTo("App/Models/Meuroadmap");
  }
}

module.exports = Meustepper;
