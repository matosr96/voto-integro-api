import { RouteOptions } from "fastify";
import { deleteCouncilor } from "../../business-logic";

type Params = {
  uuid: string;
};

export const deleteCouncilorRoute: RouteOptions = {
  method: "DELETE",
  url: "/councilors/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    try {
      const deleted = await deleteCouncilor(uuid);
      reply.send(deleted);
    } catch (err) {
      if (err instanceof Error) {
        reply.send(500).send(err.message);
      }
    }
  },
};
