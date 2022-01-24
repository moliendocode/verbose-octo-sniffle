export interface Serie {
    fecha: Date;
    valor: number;
}

export interface TipoIndicador {
    version: string;
    autor: string;
    codigo: string;
    nombre: string;
    unidad_medida: string;
    serie: Serie[];
}

export enum TipoIndicadorEnum {
    uf,
    ivp,
    dolar,
    dolar_intercambio,
    euro,
    ipc,
    utm,
    imacec,
    tpm,
    libra_cobre,
    tasa_desempleo,
    bitcoin,
}
