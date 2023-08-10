import { ZoneSchemaMongo } from "../../types";
import { Collection, getModel } from "../../constants-definitions";

interface Result {
    count: number;
    page: number;
    pages: number;
    items: any[];
  }

export const zoneList = async ( page: number, limit: number ): Promise<Result> => {
    const model = getModel(Collection.ZONES, ZoneSchemaMongo);
    const actualPage = page || 1;
    const pageSize = limit || 10;
    const skip = (actualPage - 1) * pageSize;
    const total = await model.countDocuments();
    const pages = Math.ceil(total / pageSize);
    const zone = await model.find({}).skip(skip).limit(pageSize);
    return {
      count: zone.length,
      page: actualPage,
      pages,
      items: zone,
    };
  };