module.exports = {
  routes: [
    {
      method: "GET",
      path: "/v1/boards",
      handler: "board.getAllBoards",
      config: {
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/v1/boards",
      handler: "board.addBoard",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/v1/board/:id",
      handler: "board.editBoard",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/v1/board/:id",
      handler: "board.deleteBoard",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/v1/board/:id",
      handler: "board.getBoard",
      config: {
        auth: false,
      },
    },
  ],
};
