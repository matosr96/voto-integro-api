import { ZoneSchemaMongo } from "../../types";
import { Collection, getModel } from "../../constants-definitions";

export const deleteZone = async (uuid: String): Promise<Boolean | Error> => {
  const model = await getModel(Collection.ZONES, ZoneSchemaMongo);
  const zone = await model.findOne({ uuid: uuid });
  if (!zone) {
    throw new Error("602");
  }
  await zone.remove();
  return true;
};
