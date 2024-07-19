const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const socketio = require("socket.io");

const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");

// Correctly serve static files
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function (socket) {
  console.log("a user connected");
});

app.get("/", function (req, res) {
  res.render("index");
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
