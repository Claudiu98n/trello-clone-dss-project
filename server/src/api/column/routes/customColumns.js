module.exports = {
  routes: [
    {
      method: "POST",
      path: "/v1/columns",
      handler: "column.createColumn",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/v1/column/:id",
      handler: "column.editColumn",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/v1/column/:id",
      handler: "column.deleteColumn",
      config: {
        auth: false,
      },
    },
  ],
};
