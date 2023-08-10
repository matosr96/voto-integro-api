import { Collection, getModel } from "../../constants-definitions";
import { LeaderSchemaMongo } from "../../types";

export const deleteLeader = async (uuid: String): Promise<Boolean | Error> => {
  const model = await getModel(Collection.LEADERS, LeaderSchemaMongo);
  const leader = await model.findOne({ uuid: uuid });
  if (!leader) {
    throw new Error("602");
  }
  await leader.remove();
  return true;
};
