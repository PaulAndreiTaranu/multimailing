const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
   res.send({ hi: "HELLLLO" });
});

app.listen(process.env.PORT || 5000);
