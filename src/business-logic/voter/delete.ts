import { Collection, getModel } from "../../constants-definitions";
import { VoterSchemaMongo } from "../../types";

export const deleteVoter = async (uuid: String): Promise<Boolean | Error> => {
  const model = await getModel(Collection.VOTERS, VoterSchemaMongo);
  const voter = await model.findOne({ uuid: uuid });
  if (!voter) {
    throw new Error("602");
  }
  await voter.remove();
  return true;
};
