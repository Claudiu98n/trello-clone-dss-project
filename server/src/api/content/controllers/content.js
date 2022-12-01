"use strict";

/**
 * content controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::content.content", ({ strapi }) => ({
  async createContent(ctx) {
    const { id, title, description } = ctx.request.body;

    const newContent = strapi
      .service("api::content.content")
      .create({ data: { title, description, column: id } });

    return newContent;
  },

  async editContent(ctx) {
    const { id } = ctx.request.params;
    const { title, description } = ctx.request.body;
    console.log("@@@@@@@@@@", id, title, description);
    const newContent = strapi
      .service("api::content.content")
      .update(id, { data: { title, description } });

    return newContent;
  },

  async deleteContent(ctx) {
    const { id } = ctx.request.params;

    const contents = strapi.service("api::content.content").delete(id);

    return contents;
  },
}));
