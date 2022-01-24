import axios from "axios";
import { Request, Response } from "express";
import indicaModel from "../models/indicadores";
import formatValues from "../utils/indicaFormat";

export const getIndicadores = async () => {
    const response = await axios.get<indicaModel>("https://mindicador.cl/api");
    formatValues(response.data);
    return response.data;
};

export const getIndicadoresController = async (_: Request, res: Response) => {
    const response = await getIndicadores();
    if (response) {
        res.status(200).send(response);
    } else {
        res.status(400).send("No se encontraron indicadores");
    }
};
