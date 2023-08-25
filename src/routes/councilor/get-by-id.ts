import { RouteOptions } from "fastify";
import { getOneCouncilor } from "../../business-logic";

export const getOneCouncilorRoute: RouteOptions = {
  method: "GET",
  url: "/councilors/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as { uuid: string };
    try {
      const obj = await getOneCouncilor(uuid);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
