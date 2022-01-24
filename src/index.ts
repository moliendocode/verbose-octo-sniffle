import express from "express";
import cors from "cors";
import indicaRoutes from "./routes/indicadores";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", indicaRoutes);

const port = process.env.port || 3333;

const server = app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});

server.on("error", console.error);
