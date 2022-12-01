"use strict";

/**
 * board controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::board.board", ({ strapi }) => ({
  async getAllBoards() {
    const boards = strapi.service("api::board.board").find();

    return boards;
  },

  async addBoard(ctx) {
    const { title } = ctx.request.body;

    const newBoard = strapi
      .service("api::board.board")
      .create({ data: { title } });

    return newBoard;
  },

  async editBoard(ctx) {
    const { id } = ctx.request.params;
    const { title } = ctx.request.body;

    const newBoard = strapi
      .service("api::board.board")
      .update(id, { data: { title } });

    return newBoard;
  },

  async deleteBoard(ctx) {
    const { id } = ctx.request.params;

    const boards = strapi.service("api::board.board").delete(id);

    return boards;
  },

  async getBoard(ctx) {
    const { id } = ctx.request.params;

    const board = await strapi.service("api::board.board").findOne(id, {
      fields: ["title", "createdAt"],
      populate: { columns: true },
    });

    const { columns } = board;
    for (const column of columns) {
      let contents = await strapi
        .service("api::content.content")
        .find({ populate: "column" });
      column.contents = contents?.results?.filter(
        (content) => content.column.id === column.id
      );
    }

    return board;
  },
}));
