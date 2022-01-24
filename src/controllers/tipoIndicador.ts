import axios from "axios";
import { Request, Response } from "express";
import { TipoIndicador, TipoIndicadorEnum } from "../models/tipoIndicador";
import formatValues from "../utils/tipoFormat";

const getIndicadores = async (tipo: string) => {
    const response = await axios.get<TipoIndicador>(
        `https://mindicador.cl/api/${tipo}`
    );
    formatValues(response.data);
    return response.data;
};

export const getTipoController = async (req: Request, res: Response) => {
    const tipo = req.params.tipo;
    console.log(tipo);
    if (Object.values(TipoIndicadorEnum).includes(tipo)) {
        const response = await getIndicadores(tipo);
        res.status(200).send(response);
    } else {
        res.status(400).send("Tipo de indicador no encontrado");
    }
};
