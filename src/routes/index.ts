import { FastifyInstance, RouteOptions } from "fastify";
import { userRoutes } from "./user";
import { zonesRoutes } from "./zone";

const routes: RouteOptions[] = [...userRoutes, ...zonesRoutes];
export const registerRoutes = (fastify: FastifyInstance) => {
  fastify.log.warn("Registering routes", routes);

  routes.map((route) => {
    fastify.route(route);
  });
};
