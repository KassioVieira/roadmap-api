"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with steppers
 */

const Stepper = use("App/Models/Stepper");

class StepperController {
  /**
   * Create/save a new stepper.
   * POST steppers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.only([
      "title",
      "url",
      "description",
      "type",
      "roadmap_id",
    ]);
    const stepper = await Stepper.create({ ...data });

    return stepper;
  }

  /**
   * Display a single stepper.
   * GET steppers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params }) {
    const steppers = Stepper.query().where("roadmap_id", params.id).fetch();

    return steppers;
  }

  /**
   * Update stepper details.
   * PUT or PATCH steppers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a stepper with id.
   * DELETE steppers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = StepperController;
