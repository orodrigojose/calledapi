import fastifyMongo from "@fastify/mongodb";
import { router } from "./router.ts";
import fastify from "fastify";

export const app = fastify();

app.register(router);

app.register(fastifyMongo, {
  url: "mongodb://localhost:27017/called"
});

app.listen({ port: 8080 }, (err, address) => {
  if (err) console.log(err);

  console.log(`[!] Server listening at ${address}`);
})
