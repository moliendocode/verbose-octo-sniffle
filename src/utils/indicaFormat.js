"use strict";
exports.__esModule = true;
var formatValues = function (data) {
    data.fecha = new Date(data.fecha).toLocaleDateString("es-CL");
    data.ivp.fecha = new Date(data.ivp.fecha).toLocaleDateString("es-CL");
    data.uf.fecha = new Date(data.uf.fecha).toLocaleDateString("es-CL");
    data.dolar.fecha = new Date(data.dolar.fecha).toLocaleDateString("es-CL");
    data.dolar_intercambio.fecha = new Date(data.dolar_intercambio.fecha).toLocaleDateString("es-CL");
    data.euro.fecha = new Date(data.euro.fecha).toLocaleDateString("es-CL");
    data.ipc.fecha = new Date(data.ipc.fecha).toLocaleDateString("es-CL");
    data.utm.fecha = new Date(data.utm.fecha).toLocaleDateString("es-CL");
    data.imacec.fecha = new Date(data.imacec.fecha).toLocaleDateString("es-CL");
    data.tpm.fecha = new Date(data.tpm.fecha).toLocaleDateString("es-CL");
    data.libra_cobre.fecha = new Date(data.libra_cobre.fecha).toLocaleDateString("es-CL");
    data.tasa_desempleo.fecha = new Date(data.tasa_desempleo.fecha).toLocaleDateString("es-CL");
    data.bitcoin.fecha = new Date(data.bitcoin.fecha).toLocaleDateString("es-CL");
    data.uf.valor =
        "$" + new Intl.NumberFormat().format(Math.round(data.uf.valor));
    data.ivp.valor =
        "$" + new Intl.NumberFormat().format(Math.round(data.ivp.valor));
    data.dolar.valor =
        "$" + new Intl.NumberFormat().format(Math.round(data.dolar.valor));
    data.dolar_intercambio.valor =
        "$" +
            new Intl.NumberFormat().format(Math.round(data.dolar_intercambio.valor));
    data.euro.valor =
        "$" + new Intl.NumberFormat().format(Math.round(data.euro.valor));
    data.ipc.valor =
        new Intl.NumberFormat().format(Math.round(data.ipc.valor)) + "%";
    data.utm.valor =
        "$" + new Intl.NumberFormat().format(Math.round(data.utm.valor));
    data.imacec.valor = new Intl.NumberFormat().format(data.imacec.valor) + "%";
    data.tpm.valor = new Intl.NumberFormat().format(data.tpm.valor) + "%";
    data.libra_cobre.valor =
        "US$" +
            new Intl.NumberFormat().format(Math.round(data.libra_cobre.valor));
    data.tasa_desempleo.valor =
        new Intl.NumberFormat().format(data.tasa_desempleo.valor) + "%";
    data.bitcoin.valor =
        "US$" + new Intl.NumberFormat().format(Math.round(data.bitcoin.valor));
};
exports["default"] = formatValues;
