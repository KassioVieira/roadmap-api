"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with roadmaps
 */

const Roadmap = use("App/Models/Roadmap");

class RoadmapController {
  /**
   * Show a list of all roadmaps.
   * GET roadmaps
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index() {
    const roadmaps = await Roadmap.all();

    return roadmaps;
  }

  /**
   * Show a list of all roadmaps by user.
   * GET roadmaps
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  async showbyuser({ auth }) {
    const data = await Roadmap.query().where("user_id", auth.user.id).fetch();
    return data;
  }

  /**
   * Create/save a new roadmap.
   * POST roadmaps
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, auth }) {
    const data = request.only(["title", "url", "description"]);
    const roadmap = await Roadmap.create({ user_id: auth.user.id, ...data });

    return roadmap;
  }

  /**
   * Display a single roadmap.
   * GET roadmaps/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params }) {
    const roadmap = await Roadmap.findOrFail(params.id);
    return roadmap;
  }

  /**
   * Update roadmap details.
   * PUT or PATCH roadmaps/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a roadmap with id.
   * DELETE roadmaps/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, auth, response }) {
    const roadmap = await Roadmap.findOrFail(params.id);

    if (roadmap.user_id !== auth.user.id) {
      return response.status(401);
    }

    await roadmap.delete();
  }
}

module.exports = RoadmapController;
