"use strict";
exports.__esModule = true;
var formatValues = function (data) {
    data.serie.map(function (serie) {
        serie.fecha = new Date(serie.fecha).toLocaleDateString("es-CL");
        if (data.unidad_medida === "Pesos") {
            serie.valor =
                "$" + new Intl.NumberFormat().format(Math.round(serie.valor));
        }
        if (data.unidad_medida.toLocaleLowerCase() ===
            "Porcentaje".toLocaleLowerCase()) {
            serie.valor = new Intl.NumberFormat().format(serie.valor) + "%";
        }
        if (data.unidad_medida === "Dólar") {
            serie.valor =
                "US$" + new Intl.NumberFormat().format(Math.round(serie.valor));
        }
    });
};
exports["default"] = formatValues;
