import { RouteOptions } from "fastify";
import { createZoneRoute } from "./create";
import { deleteZoneByIdRoute } from "./delete";
import { getOneZoneRoute } from "./get-by-id";
import { zonesListRoute } from "./list";
import { updateZoneRoute } from "./update";

export const zonesRoutes: RouteOptions[] = [
  createZoneRoute,
  deleteZoneByIdRoute,
  getOneZoneRoute,
  zonesListRoute,
  updateZoneRoute,
];
