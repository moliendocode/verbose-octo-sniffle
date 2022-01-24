"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var indicadores_1 = require("./routes/indicadores");
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use("/", indicadores_1["default"]);
var port = process.env.port || 3333;
var server = app.listen(port, function () {
    console.log("Servidor iniciado en http://localhost:".concat(port));
});
server.on("error", console.error);
