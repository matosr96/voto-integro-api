import { RouteOptions } from "fastify";
import { PartialCouncilor } from "../../types";
import { updateCouncilor } from "../../business-logic";

export const updateCouncilorRoute: RouteOptions = {
  method: "PUT",
  url: "/councilors",
  handler: async (request, reply) => {
    const { body } = request;
    const { data } = body as { data: PartialCouncilor };
    try {
      const obj = await updateCouncilor(data);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
