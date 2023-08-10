import { Collection, getModel } from "../../constants-definitions";
import { Zone, ZoneSchemaMongo } from "../../types";

export const createZone = async (data: Zone): Promise<Zone | Error> => {
  const model = getModel(Collection.ZONES, ZoneSchemaMongo);
  const result = new model();
  if (!result) throw new Error("601");
  await result.save();
  return { ...result._doc };
};
