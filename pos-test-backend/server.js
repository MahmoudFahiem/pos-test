const app = require("./app");
const PORT = process.env.PORT;

const server = app.listen(PORT, () =>
  console.log(`Server Running on http://localhost:${PORT}`)
);
