import { z } from "zod";
import { prisma } from "../lib/prisma";
import { FastifyInstance } from "fastify";

export async function postsRoutes(app: FastifyInstance) {
  app.addHook("preHandler", async (request) => {
    await request.jwtVerify();
  });

  // Listar todas as postagens
  app.get("/posts", async (request) => {
    const allPosts = await prisma.post.findMany({
      where: { authorId: request.user.sub },
      orderBy: { createdAt: "asc" },
    });

    return allPosts.map((post) => {
      return {
        id: post.id,
        coverImg: post.coverImg,
        excerpt: post.content.substring(0, 115).concat("..."),
      };
    });
  });

  // Rota para obter uma postagem por ID
  app.get("/posts/:id", async (request, reply) => {
    const paramsSchema = z.object({
      postId: z.string().uuid(),
    });

    const { postId } = paramsSchema.parse(request.params);

    const post = await prisma.post.findUniqueOrThrow({ where: { id: postId } });

    if (!post.isPublic && post.authorId !== request.user.sub) {
      return reply.status(401).send({ error: "You are not allowed to access this post" });
    }

    return post;
  });

  // Rota para criar uma nova postagem
  app.post("/posts", async (request) => {
    const bodySchema = z.object({
      content: z.string(),
      coverImg: z.string().url().optional(),
      isPublic: z.coerce.boolean().default(false),
    });

    const { isPublic, content, coverImg } = bodySchema.parse(request.body);
    const newPost = { isPublic, content, coverImg, authorId: request.user.sub };

    const post = await prisma.post.create({ data: newPost });

    return post;
  });

  // Rota para atualizar uma postagem existente
  app.put("/posts/:id", async (request, reply) => {
    const paramsSchema = z.object({
      postId: z.string().uuid(),
    });

    const { postId } = paramsSchema.parse(request.params);

    const bodySchema = z.object({
      content: z.string(),
      coverImg: z.string().url().optional(),
      isPublic: z.coerce.boolean().default(false),
    });

    const { isPublic, content, coverImg } = bodySchema.parse(request.body);

    let post = await prisma.post.findUniqueOrThrow({ where: { id: postId } });

    if (post.authorId !== request.user.sub) {
      return reply.status(401).send({ error: "You are not allowed to access this post" });
    }

    const updatedPost = await prisma.post.update({ where: { id: postId }, data: { isPublic, content, coverImg } });

    return updatedPost;
  });

  // Rota para excluir uma postagem
  app.delete("/posts/:id", async (request, reply) => {
    const paramsSchema = z.object({
      postId: z.string().uuid(),
    });

    const { postId } = paramsSchema.parse(request.params);

    const post = await prisma.post.findUniqueOrThrow({ where: { id: postId } });

    if (post.authorId !== request.user.sub) {
      return reply.status(401).send({ error: "You are not allowed to access this post" });
    }

    await prisma.post.delete({ where: { id: postId } });
  });
}
