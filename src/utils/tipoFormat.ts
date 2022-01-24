import { TipoIndicador } from "../models/tipoIndicador";

const formatValues = (data: TipoIndicador) => {
    data.serie.map((serie: any) => {
        serie.fecha = new Date(serie.fecha).toLocaleDateString("es-CL");

        if (data.unidad_medida === "Pesos") {
            serie.valor =
                "$" + new Intl.NumberFormat().format(Math.round(serie.valor));
        }
        if (
            data.unidad_medida.toLocaleLowerCase() ===
            "Porcentaje".toLocaleLowerCase()
        ) {
            serie.valor = new Intl.NumberFormat().format(serie.valor) + "%";
        }
        if (data.unidad_medida === "Dólar") {
            serie.valor =
                "US$" + new Intl.NumberFormat().format(Math.round(serie.valor));
        }
    });
};

export default formatValues;
