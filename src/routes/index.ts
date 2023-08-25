import { FastifyInstance, RouteOptions } from "fastify";
import { userRoutes } from "./user";
import { zonesRoutes } from "./zone";
import { councilorRoutes } from "./councilor";

const routes: RouteOptions[] = [
  ...userRoutes,
  ...zonesRoutes,
  ...councilorRoutes,
];
export const registerRoutes = (fastify: FastifyInstance) => {
  fastify.log.warn("Registering routes", routes);

  routes.map((route) => {
    fastify.route(route);
  });
};
