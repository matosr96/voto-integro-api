import { RouteOptions } from "fastify";
import { Zone } from "../../types";
import { createZone } from "../../business-logic";

export const createZoneRoute: RouteOptions = {
  method: "POST",
  url: "/zones",
  handler: async (request, reply) => {
    const { body } = request;
    const data = body as Zone;
    try {
      const obj = await createZone(data);
      reply.status(201).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
