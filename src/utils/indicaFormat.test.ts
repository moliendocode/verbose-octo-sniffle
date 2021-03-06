import * as indicaFormat from "./indicaFormat";

describe("indicaFormat.default", () => {
    test("Los valores deben cambiar", () => {
        let param1: any = {
            version: "1.7.0",
            autor: "mindicador.cl",
            fecha: "2022-01-24T18:00:00.000Z",
            uf: {
                codigo: "uf",
                nombre: "Unidad de fomento (UF)",
                unidad_medida: "Pesos",
                fecha: "2022-01-24T03:00:00.000Z",
                valor: 31156.54,
            },
            ivp: {
                codigo: "ivp",
                nombre: "Indice de valor promedio (IVP)",
                unidad_medida: "Pesos",
                fecha: "2022-01-24T03:00:00.000Z",
                valor: 31947.75,
            },
            dolar: {
                codigo: "dolar",
                nombre: "Dólar observado",
                unidad_medida: "Pesos",
                fecha: "2022-01-24T03:00:00.000Z",
                valor: 799.23,
            },
            dolar_intercambio: {
                codigo: "dolar_intercambio",
                nombre: "Dólar acuerdo",
                unidad_medida: "Pesos",
                fecha: "2014-11-13T03:00:00.000Z",
                valor: 758.87,
            },
            euro: {
                codigo: "euro",
                nombre: "Euro",
                unidad_medida: "Pesos",
                fecha: "2022-01-24T03:00:00.000Z",
                valor: 906.88,
            },
            ipc: {
                codigo: "ipc",
                nombre: "Indice de Precios al Consumidor (IPC)",
                unidad_medida: "Porcentaje",
                fecha: "2021-12-01T03:00:00.000Z",
                valor: 0.8,
            },
            utm: {
                codigo: "utm",
                nombre: "Unidad Tributaria Mensual (UTM)",
                unidad_medida: "Pesos",
                fecha: "2022-01-01T03:00:00.000Z",
                valor: 54442,
            },
            imacec: {
                codigo: "imacec",
                nombre: "Imacec",
                unidad_medida: "Porcentaje",
                fecha: "2021-11-01T03:00:00.000Z",
                valor: 14.3,
            },
            tpm: {
                codigo: "tpm",
                nombre: "Tasa Política Monetaria (TPM)",
                unidad_medida: "Porcentaje",
                fecha: "2022-01-24T03:00:00.000Z",
                valor: 4,
            },
            libra_cobre: {
                codigo: "libra_cobre",
                nombre: "Libra de Cobre",
                unidad_medida: "Dólar",
                fecha: "2022-01-24T03:00:00.000Z",
                valor: 4.54,
            },
            tasa_desempleo: {
                codigo: "tasa_desempleo",
                nombre: "Tasa de desempleo",
                unidad_medida: "Porcentaje",
                fecha: "2021-11-01T03:00:00.000Z",
                valor: 7.53,
            },
            bitcoin: {
                codigo: "bitcoin",
                nombre: "Bitcoin",
                unidad_medida: "Dólar",
                fecha: "2022-01-21T03:00:00.000Z",
                valor: 36480.85,
            },
        };
        indicaFormat.default(param1);
        expect(param1).not.toEqual({
            version: "1.7.0",
            autor: "mindicador.cl",
            fecha: "2022-01-24T18:00:00.000Z",
            uf: {
                codigo: "uf",
                nombre: "Unidad de fomento (UF)",
                unidad_medida: "Pesos",
                fecha: "2022-01-24T03:00:00.000Z",
                valor: 31156.54,
            },
            ivp: {
                codigo: "ivp",
                nombre: "Indice de valor promedio (IVP)",
                unidad_medida: "Pesos",
                fecha: "2022-01-24T03:00:00.000Z",
                valor: 31947.75,
            },
            dolar: {
                codigo: "dolar",
                nombre: "Dólar observado",
                unidad_medida: "Pesos",
                fecha: "2022-01-24T03:00:00.000Z",
                valor: 799.23,
            },
            dolar_intercambio: {
                codigo: "dolar_intercambio",
                nombre: "Dólar acuerdo",
                unidad_medida: "Pesos",
                fecha: "2014-11-13T03:00:00.000Z",
                valor: 758.87,
            },
            euro: {
                codigo: "euro",
                nombre: "Euro",
                unidad_medida: "Pesos",
                fecha: "2022-01-24T03:00:00.000Z",
                valor: 906.88,
            },
            ipc: {
                codigo: "ipc",
                nombre: "Indice de Precios al Consumidor (IPC)",
                unidad_medida: "Porcentaje",
                fecha: "2021-12-01T03:00:00.000Z",
                valor: 0.8,
            },
            utm: {
                codigo: "utm",
                nombre: "Unidad Tributaria Mensual (UTM)",
                unidad_medida: "Pesos",
                fecha: "2022-01-01T03:00:00.000Z",
                valor: 54442,
            },
            imacec: {
                codigo: "imacec",
                nombre: "Imacec",
                unidad_medida: "Porcentaje",
                fecha: "2021-11-01T03:00:00.000Z",
                valor: 14.3,
            },
            tpm: {
                codigo: "tpm",
                nombre: "Tasa Política Monetaria (TPM)",
                unidad_medida: "Porcentaje",
                fecha: "2022-01-24T03:00:00.000Z",
                valor: 4,
            },
            libra_cobre: {
                codigo: "libra_cobre",
                nombre: "Libra de Cobre",
                unidad_medida: "Dólar",
                fecha: "2022-01-24T03:00:00.000Z",
                valor: 4.54,
            },
            tasa_desempleo: {
                codigo: "tasa_desempleo",
                nombre: "Tasa de desempleo",
                unidad_medida: "Porcentaje",
                fecha: "2021-11-01T03:00:00.000Z",
                valor: 7.53,
            },
            bitcoin: {
                codigo: "bitcoin",
                nombre: "Bitcoin",
                unidad_medida: "Dólar",
                fecha: "2022-01-21T03:00:00.000Z",
                valor: 36480.85,
            },
        });
    });

    test("Debe formatear fechas y valores a formato legible", () => {
        let param1: any = {
            version: "1.7.0",
            autor: "mindicador.cl",
            fecha: "2022-01-24T18:00:00.000Z",
            uf: {
                codigo: "uf",
                nombre: "Unidad de fomento (UF)",
                unidad_medida: "Pesos",
                fecha: "2022-01-24T03:00:00.000Z",
                valor: 31156.54,
            },
            ivp: {
                codigo: "ivp",
                nombre: "Indice de valor promedio (IVP)",
                unidad_medida: "Pesos",
                fecha: "2022-01-24T03:00:00.000Z",
                valor: 31947.75,
            },
            dolar: {
                codigo: "dolar",
                nombre: "Dólar observado",
                unidad_medida: "Pesos",
                fecha: "2022-01-24T03:00:00.000Z",
                valor: 799.23,
            },
            dolar_intercambio: {
                codigo: "dolar_intercambio",
                nombre: "Dólar acuerdo",
                unidad_medida: "Pesos",
                fecha: "2014-11-13T03:00:00.000Z",
                valor: 758.87,
            },
            euro: {
                codigo: "euro",
                nombre: "Euro",
                unidad_medida: "Pesos",
                fecha: "2022-01-24T03:00:00.000Z",
                valor: 906.88,
            },
            ipc: {
                codigo: "ipc",
                nombre: "Indice de Precios al Consumidor (IPC)",
                unidad_medida: "Porcentaje",
                fecha: "2021-12-01T03:00:00.000Z",
                valor: 0.8,
            },
            utm: {
                codigo: "utm",
                nombre: "Unidad Tributaria Mensual (UTM)",
                unidad_medida: "Pesos",
                fecha: "2022-01-01T03:00:00.000Z",
                valor: 54442,
            },
            imacec: {
                codigo: "imacec",
                nombre: "Imacec",
                unidad_medida: "Porcentaje",
                fecha: "2021-11-01T03:00:00.000Z",
                valor: 14.3,
            },
            tpm: {
                codigo: "tpm",
                nombre: "Tasa Política Monetaria (TPM)",
                unidad_medida: "Porcentaje",
                fecha: "2022-01-24T03:00:00.000Z",
                valor: 4,
            },
            libra_cobre: {
                codigo: "libra_cobre",
                nombre: "Libra de Cobre",
                unidad_medida: "Dólar",
                fecha: "2022-01-24T03:00:00.000Z",
                valor: 4.54,
            },
            tasa_desempleo: {
                codigo: "tasa_desempleo",
                nombre: "Tasa de desempleo",
                unidad_medida: "Porcentaje",
                fecha: "2021-11-01T03:00:00.000Z",
                valor: 7.53,
            },
            bitcoin: {
                codigo: "bitcoin",
                nombre: "Bitcoin",
                unidad_medida: "Dólar",
                fecha: "2022-01-21T03:00:00.000Z",
                valor: 36480.85,
            },
        };
        indicaFormat.default(param1);
        expect(param1).toEqual({
            version: "1.7.0",
            autor: "mindicador.cl",
            fecha: "24-01-2022",
            uf: {
                codigo: "uf",
                nombre: "Unidad de fomento (UF)",
                unidad_medida: "Pesos",
                fecha: "24-01-2022",
                valor: "$31,157",
            },
            ivp: {
                codigo: "ivp",
                nombre: "Indice de valor promedio (IVP)",
                unidad_medida: "Pesos",
                fecha: "24-01-2022",
                valor: "$31,948",
            },
            dolar: {
                codigo: "dolar",
                nombre: "Dólar observado",
                unidad_medida: "Pesos",
                fecha: "24-01-2022",
                valor: "$799",
            },
            dolar_intercambio: {
                codigo: "dolar_intercambio",
                nombre: "Dólar acuerdo",
                unidad_medida: "Pesos",
                fecha: "13-11-2014",
                valor: "$759",
            },
            euro: {
                codigo: "euro",
                nombre: "Euro",
                unidad_medida: "Pesos",
                fecha: "24-01-2022",
                valor: "$907",
            },
            ipc: {
                codigo: "ipc",
                nombre: "Indice de Precios al Consumidor (IPC)",
                unidad_medida: "Porcentaje",
                fecha: "01-12-2021",
                valor: "1%",
            },
            utm: {
                codigo: "utm",
                nombre: "Unidad Tributaria Mensual (UTM)",
                unidad_medida: "Pesos",
                fecha: "01-01-2022",
                valor: "$54,442",
            },
            imacec: {
                codigo: "imacec",
                nombre: "Imacec",
                unidad_medida: "Porcentaje",
                fecha: "01-11-2021",
                valor: "14.3%",
            },
            tpm: {
                codigo: "tpm",
                nombre: "Tasa Política Monetaria (TPM)",
                unidad_medida: "Porcentaje",
                fecha: "24-01-2022",
                valor: "4%",
            },
            libra_cobre: {
                codigo: "libra_cobre",
                nombre: "Libra de Cobre",
                unidad_medida: "Dólar",
                fecha: "24-01-2022",
                valor: "US$5",
            },
            tasa_desempleo: {
                codigo: "tasa_desempleo",
                nombre: "Tasa de desempleo",
                unidad_medida: "Porcentaje",
                fecha: "01-11-2021",
                valor: "7.53%",
            },
            bitcoin: {
                codigo: "bitcoin",
                nombre: "Bitcoin",
                unidad_medida: "Dólar",
                fecha: "21-01-2022",
                valor: "US$36,481",
            },
        });
    });
});
