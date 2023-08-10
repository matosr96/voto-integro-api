import { RouteOptions } from "fastify";
import { zoneList } from "../../business-logic";

export const zonesListRoute: RouteOptions = {
  method: "GET",
  url: "/zones",
  handler: async (request, reply) => {
    try {
      const { query } = request;
      const { page, limit } = query as any;
      const obj = await zoneList(page, limit);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
