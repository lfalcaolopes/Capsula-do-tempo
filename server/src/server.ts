import fastify from "fastify";
import cors from "@fastify/cors";
import { postsRoutes } from "./routes/posts";

const app = fastify();

app.register(cors, {
  origin: true,
});

app.register(postsRoutes);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running on http://localhost:3333");
});
