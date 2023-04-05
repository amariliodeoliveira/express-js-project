const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const items = [
    {
      title: "D",
      message: "esenvolver Aplicações/serviços de forma fácil.",
    },
    {
      title: "E",
      message: "JS usa JavaScript para renderizar HTML.",
    },
    {
      title: "M",
      message: "uito fácil de usar.",
    },
    {
      title: "A",
      message: "morzinho.",
    },
  ];

  res.render("pages/index", {
    qualities: items,
  });
});

app.get("/aboutme", function (req, res) {
  res.render("pages/aboutMe");
});

app.listen(8080);
console.log("Funfou");
