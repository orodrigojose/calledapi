import { ChamadosRouter } from "./routes/chamados/@ChamadosRouter.ts";
import { app } from "./server.ts";

export const router = async () => {
  app.register(ChamadosRouter);
}
