const express = require("express");
const app = express();
const port = 8080;

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const JokeRoutes = require("./server/routes/jokes.routes");
JokeRoutes(app);

app.listen(port, () => console.log(`Express running on port ${port}`));