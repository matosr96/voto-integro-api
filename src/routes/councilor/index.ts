import { RouteOptions } from "fastify";
import { createCouncilorRoute } from "./create";
import { deleteCouncilorRoute } from "./delete";
import { getOneCouncilorRoute } from "./get-by-id";
import { CouncilorListRoute } from "./list";
import { updateCouncilorRoute } from "./update";

export const councilorRoutes: RouteOptions[] = [
  createCouncilorRoute,
  deleteCouncilorRoute,
  getOneCouncilorRoute,
  CouncilorListRoute,
  updateCouncilorRoute,
];
