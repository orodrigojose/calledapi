import { app } from "../../server.ts";
import { getAll } from "./getall.ts";
import { create } from "./create.ts";

export const ChamadosRouter = async () => {
  app.register(create);
  app.register(getAll);
}
