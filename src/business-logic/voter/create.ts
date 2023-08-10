import { Collection, getModel } from "../../constants-definitions";
import { Voter, VoterSchemaMongo } from "../../types";

export const createVoter = async (data: Voter): Promise<Voter | Error> => {
  const model = getModel(Collection.VOTERS, VoterSchemaMongo);
  const result = new model();
  if (!result) throw new Error("601");
  await result.save();
  return { ...result._doc };
};
