const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/", (req, res) => {
  res.status(200).send("demo-app up ✅");
});

app.get("/api/hello", (req, res) => {
  res.status(200).json({ message: "Hello from demo-app!" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`demo-app listening on port ${PORT}`);
});
