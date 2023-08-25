import { RouteOptions } from "fastify";
import { Councilor } from "../../types";
import { createCouncilor } from "../../business-logic";

export const createCouncilorRoute: RouteOptions = {
  method: "POST",
  url: "/councilors",
  handler: async (request, reply) => {
    const { body } = request;
    const data = body as Councilor;
    try {
      const obj = await createCouncilor(data);
      reply.status(201).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
