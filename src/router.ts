import { FastifyRequest, FastifyReply } from "fastify";
import { app } from "./server.ts";

export const router = async () => {
  app.get("/", async (req: FastifyRequest, rep: FastifyReply) => {
    rep.status(200).send({
      message: "Hello world route!"
    })
  })
}
