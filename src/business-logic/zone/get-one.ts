import { Zone, ZoneSchemaMongo } from "../../types";
import { Collection, getModel } from "../../constants-definitions";

export const getOneZone = async (uuid: string): Promise<Zone> => {
  const model = await getModel(Collection.ZONES, ZoneSchemaMongo);
  const zone = (await model.findOne({ uuid: uuid })) as Zone;
  return zone;
};
