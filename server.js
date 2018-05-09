const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(__dirname + "/weatherAngular/dist/weatherAngular"));
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./weatherAngular/dist/weatherAngular/index.html"));
});
app.listen(8000);