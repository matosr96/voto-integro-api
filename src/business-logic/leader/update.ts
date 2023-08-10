import { Collection, getModel } from "../../constants-definitions";
import { LeaderSchemaMongo, PartialLeader } from "../../types";

export const updateLeader = async ( uuid: string, data: PartialLeader ): Promise<PartialLeader | Error> => {
  const model = await getModel(Collection.LEADERS, LeaderSchemaMongo);
  const obj = await model.findOne({ uuid });
  if (!obj) {
    throw new Error("NO SE ENCUENTRA");
  }
  const dataToUpdate = { ...data };
  await obj.updateOne(dataToUpdate);
  return { ...obj.doc };
};
