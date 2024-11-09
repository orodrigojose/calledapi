import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export const getAll = async (app: FastifyInstance) => {
  app.get("/chamados", async (req: FastifyRequest, rep: FastifyReply) => {

    const calledCollection = app.mongo.db.collection("chamados")
    const docs = await calledCollection.find().toArray()

    console.log(docs)
    
    rep.status(200).send({
      data: docs.map(d => {
        d.id = d._id.toString();
        return d;
      })
    }) 
  })
}
