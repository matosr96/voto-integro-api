import { Collection, getModel } from "../../constants-definitions";
import { Councilor, CouncilorSchemaMongo } from "../../types";

export const getOneCouncilor = async (uuid: string): Promise<Councilor> => {
  const model = await getModel(Collection.COUNCILORS, CouncilorSchemaMongo);
  const obj = (await model.findOne({ uuid: uuid })) as Councilor;
  return obj;
};
