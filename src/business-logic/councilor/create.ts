import { Collection, getModel } from "../../constants-definitions";
import { Councilor, CouncilorSchemaMongo } from "../../types";

export const createCouncilor = async (
  data: Councilor
): Promise<Councilor | Error> => {
  const model = getModel(Collection.COUNCILORS, CouncilorSchemaMongo);
  const result = new model(data);
  if (!result) throw new Error("601");
  await result.save();
  return { ...result._doc };
};
