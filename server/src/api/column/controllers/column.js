"use strict";

/**
 * column controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::column.column", ({ strapi }) => ({
  async createColumn(ctx) {
    const { id, title } = ctx.request.body;

    const newColumn = strapi
      .service("api::column.column")
      .create({ data: { title, board: id } });

    return newColumn;
  },

  async editColumn(ctx) {
    const { id } = ctx.request.params;
    const { title } = ctx.request.body;

    const newColumn = strapi
      .service("api::column.column")
      .update(id, { data: { title } });

    return newColumn;
  },

  async deleteColumn(ctx) {
    const { id } = ctx.request.params;

    const columns = strapi.service("api::column.column").delete(id);

    return columns;
  },
}));
