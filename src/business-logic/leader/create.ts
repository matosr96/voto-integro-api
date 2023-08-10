import { Collection, getModel } from "../../constants-definitions";
import { Leader, LeaderSchemaMongo } from "../../types";

export const createLeader = async (data: Leader): Promise<Leader | Error> => {
  const model = getModel(Collection.LEADERS, LeaderSchemaMongo);
  const result = new model();
  if (!result) throw new Error("601");
  await result.save();
  return { ...result._doc };
};
