import { RouteOptions } from "fastify";
import { Zone } from "../../types";
import { updateZone } from "../../business-logic";

type Params = {
  uuid: string;
};

export const updateZoneRoute: RouteOptions = {
  method: "PUT",
  url: "/zones/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    const { body } = request;
    const { data } = body as { data: Zone };
    try {
      const obj = await updateZone(uuid, data);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
