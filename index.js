const express = require("express");
const app = express();
const port = 5000;
var cors = require("cors");
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "udoy", gmail: "udoy@gmail.com" },
  { id: 2, name: "rafe", gmail: "rafe@gmail.com" },
  { id: 3, name: "arif", gmail: "arif@gmail.com" },
  { id: 4, name: "hasan", gmail: "hasan@gmail.com" },
  { id: 5, name: "akib", gmail: "akib@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Hi hoe are you");
});

app.get("/users", (req, res) => {
  res.send(users);

  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const user = users[id];
  res.send(user);
});

app.post("/users", (req, res) => {
  console.log(req.body);
});
app.listen(port, () => {
  console.log("listinig to port", port);
});
