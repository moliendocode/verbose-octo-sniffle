export default interface Indicadores {
    version: string;
    autor: string;
    fecha: Date;
    uf: {
        codigo: string;
        nombre: string;
        unidad_medida: string;
        fecha: Date;
        valor: number;
    };
    ivp: {
        codigo: string;
        nombre: string;
        unidad_medida: string;
        fecha: Date;
        valor: number;
    };
    dolar: {
        codigo: string;
        nombre: string;
        unidad_medida: string;
        fecha: Date;
        valor: number;
    };
    dolar_intercambio: {
        codigo: string;
        nombre: string;
        unidad_medida: string;
        fecha: Date;
        valor: number;
    };
    euro: {
        codigo: string;
        nombre: string;
        unidad_medida: string;
        fecha: Date;
        valor: number;
    };
    ipc: {
        codigo: string;
        nombre: string;
        unidad_medida: string;
        fecha: Date;
        valor: number;
    };
    utm: {
        codigo: string;
        nombre: string;
        unidad_medida: string;
        fecha: Date;
        valor: number;
    };
    imacec: {
        codigo: string;
        nombre: string;
        unidad_medida: string;
        fecha: Date;
        valor: number;
    };
    tpm: {
        codigo: string;
        nombre: string;
        unidad_medida: string;
        fecha: Date;
        valor: number;
    };
    libra_cobre: {
        codigo: string;
        nombre: string;
        unidad_medida: string;
        fecha: Date;
        valor: number;
    };
    tasa_desempleo: {
        codigo: string;
        nombre: string;
        unidad_medida: string;
        fecha: Date;
        valor: number;
    };
    bitcoin: {
        codigo: string;
        nombre: string;
        unidad_medida: string;
        fecha: Date;
        valor: number;
    };
}
