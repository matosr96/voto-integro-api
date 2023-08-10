import { Collection, getModel } from "../../constants-definitions";
import { PartialVoter, VoterSchemaMongo } from "../../types";

export const updateVoter = async ( uuid: string, data: PartialVoter ): Promise<PartialVoter | Error> => {
  const model = await getModel(Collection.VOTERS, VoterSchemaMongo);
  const obj = await model.findOne({ uuid });
  if (!obj) {
    throw new Error("NO SE ENCUENTRA");
  }
  const dataToUpdate = { ...data };
  await obj.updateOne(dataToUpdate);
  return { ...obj.doc };
};
