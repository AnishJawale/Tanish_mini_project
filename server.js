const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const chatRoute = require("./routes/chat");
app.use("/chat", chatRoute);

app.use(express.static("public"));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});