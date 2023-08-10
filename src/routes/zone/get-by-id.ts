import { RouteOptions } from "fastify";
import { getOneZone } from "../../business-logic";

export const getOneZoneRoute: RouteOptions = {
  method: "GET",
  url: "/zones/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as { uuid: string };
    try {
      const obj = await getOneZone(uuid);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
