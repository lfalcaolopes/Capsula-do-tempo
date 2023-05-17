import { z } from "zod";
import { prisma } from "../lib/prisma";
import { FastifyInstance } from "fastify";

export async function postsRoutes(app: FastifyInstance) {
  // Listar todas as postagens
  app.get("/posts", async () => {
    const allPosts = await prisma.post.findMany({ orderBy: { createdAt: "asc" } });

    return allPosts.map((post) => {
      return {
        id: post.id,
        coverImg: post.coverImg,
        excerpt: post.content.substring(0, 115).concat("..."),
      };
    });
  });

  // Rota para obter uma postagem por ID
  app.get("/posts/:id", async (request) => {
    const paramsSchema = z.object({
      postId: z.string().uuid(),
    });

    const { postId } = paramsSchema.parse(request.params);

    const post = await prisma.post.findUniqueOrThrow({ where: { id: postId } });

    return post;
  });

  // Rota para criar uma nova postagem
  app.post("/posts", async (request) => {
    const bodySchema = z.object({
      authorId: z.string().uuid(),
      content: z.string(),
      coverImg: z.string().url().optional(),
      isPublic: z.coerce.boolean().default(false),
    });

    const { authorId, isPublic, content, coverImg } = bodySchema.parse(request.body);
    const newPost = { isPublic, content, coverImg, authorId };

    const post = await prisma.post.create({ data: newPost });

    return post;
  });

  // Rota para atualizar uma postagem existente
  app.put("/posts/:id", async (request) => {
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

    const updatedPost = await prisma.post.update({ where: { id: postId }, data: { isPublic, content, coverImg } });

    return updatedPost;
  });

  // Rota para excluir uma postagem
  app.delete("/posts/:id", async (request) => {
    const paramsSchema = z.object({
      postId: z.string().uuid(),
    });

    const { postId } = paramsSchema.parse(request.params);

    await prisma.post.delete({ where: { id: postId } });
  });
}
