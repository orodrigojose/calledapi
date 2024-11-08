import fastify from "fastify";
import { router } from "./router.ts";

export const app = fastify();

app.register(router);

app.listen({ port: 8080 }, (err, address) => {
  if (err) console.log(err);

  console.log(`[!] Server listening at ${address}`);
})
