import { Collection, getModel } from "../../constants-definitions";
import { Voter, VoterSchemaMongo } from "../../types";

export const getOneVoter = async (uuid: string): Promise<Voter> => {
  const model = await getModel(Collection.VOTERS, VoterSchemaMongo);
  const voter = (await model.findOne({ uuid: uuid })) as Voter;
  return voter;
};
