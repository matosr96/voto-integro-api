import { Collection, getModel } from "../../constants-definitions";
import { Leader, LeaderSchemaMongo } from "../../types";

export const getOneLeader = async (uuid: string): Promise<Leader> => {
  const model = await getModel(Collection.LEADERS, LeaderSchemaMongo);
  const leader = (await model.findOne({ uuid: uuid })) as Leader;
  return leader;
};
