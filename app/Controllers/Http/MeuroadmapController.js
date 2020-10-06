"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with meuroadmaps
 */

const Meuroadmap = use("App/Models/Meuroadmap");
const Roadmap = use("App/Models/Roadmap");

const Database = use("Database");

class MeuroadmapController {
  /**
   * Show a list of all meuroadmaps.
   * GET meuroadmaps
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ auth }) {
    const roadmaps = await Database.table("roadmaps")
      .innerJoin("meuroadmaps", function () {
        this.on("roadmaps.id", "meuroadmaps.roadmap_id");
      })
      .where("meuroadmaps.user_id", auth.user.id);

    return roadmaps;
  }

  /**
   * Render a form to be used for creating a new meuroadmap.
   * GET meuroadmaps/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async store({ request, auth }) {
    const data = request.only(["roadmap_id", "status"]);
    const roadmap = await Meuroadmap.create({ user_id: auth.user.id, ...data });

    return roadmap;
  }

  /**
   * Display a single meuroadmap.
   * GET meuroadmaps/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing meuroadmap.
   * GET meuroadmaps/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update meuroadmap details.
   * PUT or PATCH meuroadmaps/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a meuroadmap with id.
   * DELETE meuroadmaps/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = MeuroadmapController;
