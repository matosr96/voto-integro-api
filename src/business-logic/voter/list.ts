import { Collection, getModel } from "../../constants-definitions";
import { VoterSchemaMongo } from "../../types";

interface Result {
  count: number;
  page: number;
  pages: number;
  items: any[];
}

export const voterList = async (
  page: number,
  limit: number
): Promise<Result> => {
  const model = getModel(Collection.VOTERS, VoterSchemaMongo);
  const actualPage = page || 1;
  const pageSize = limit || 10;
  const skip = (actualPage - 1) * pageSize;
  const total = await model.countDocuments();
  const pages = Math.ceil(total / pageSize);
  const voter = await model.find({}).skip(skip).limit(pageSize);
  return {
    count: voter.length,
    page: actualPage,
    pages,
    items: voter,
  };
};
