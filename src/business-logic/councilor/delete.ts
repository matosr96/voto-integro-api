import { Collection, getModel } from "../../constants-definitions";
import { CouncilorSchemaMongo, LeaderSchemaMongo } from "../../types";

export const deleteCouncilor = async (uuid: String): Promise<Boolean | Error> => {
  const model = await getModel(Collection.COUNCILORS, CouncilorSchemaMongo);
  const obj = await model.findOne({ uuid: uuid });
  if (!obj) {
    throw new Error("602");
  }
  await obj.remove();
  return true;
};
