import { Router, Request, Response } from "express";
import { getIndicadoresController } from "../controllers/indicadores";
import { getTipoController } from "../controllers/tipoIndicador";

const router = Router();

router.get("/", (_: Request, res: Response) => {
    res.send("Worki API");
});
router.get("/api", getIndicadoresController);
router.get("/api/:tipo", getTipoController);

export default router;
