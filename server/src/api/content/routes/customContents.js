module.exports = {
  routes: [
    {
      method: "POST",
      path: "/v1/contents",
      handler: "content.createContent",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/v1/content/:id",
      handler: "content.editContent",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/v1/content/:id",
      handler: "content.deleteContent",
      config: {
        auth: false,
      },
    },
  ],
};
