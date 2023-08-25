import { RouteOptions } from "fastify";
import { CouncilorList } from "../../business-logic";

export const CouncilorListRoute: RouteOptions = {
  method: "GET",
  url: "/councilors",
  handler: async (request, reply) => {
    try {
      const { query } = request;
      const { page, limit } = query as any;
      const obj = await CouncilorList(page, limit);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
