"use strict";
exports.__esModule = true;
var express_1 = require("express");
var indicadores_1 = require("../controllers/indicadores");
var tipoIndicador_1 = require("../controllers/tipoIndicador");
var router = (0, express_1.Router)();
router.get("/", function (_, res) {
    res.send("Worki API");
});
router.get("/api", indicadores_1.getIndicadoresController);
router.get("/api/:tipo", tipoIndicador_1.getTipoController);
exports["default"] = router;
