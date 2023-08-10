import { PartialZone, ZoneSchemaMongo } from "../../types";
import { Collection, getModel } from "../../constants-definitions";

export const updateZone = async ( uuid: string, data: PartialZone ): Promise<PartialZone | Error> => {
  const model = await getModel(Collection.ZONES, ZoneSchemaMongo);
  const obj = await model.findOne({ uuid });
  if (!obj) {
    throw new Error("NO SE ENCUENTRA");
  }
  const dataToUpdate = { ...data };
  await obj.updateOne(dataToUpdate);
  return { ...obj.doc };
};
