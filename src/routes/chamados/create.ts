import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export const create = async (app: FastifyInstance) => {
  app.post("/chamados/create", async (req: FastifyRequest, rep: FastifyReply) => {
    const calledCollection = app.mongo.db.collection("chamados")

    const result = await calledCollection.insertOne(req.body);


    rep.status(200).send({
      message: "Your called has been created"
    })
  })

}

