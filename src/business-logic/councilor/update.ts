import { Collection, getModel } from "../../constants-definitions";
import { CouncilorSchemaMongo, PartialCouncilor } from "../../types";

export const updateCouncilor = async (
  data: PartialCouncilor
): Promise<PartialCouncilor | Error> => {
  try {
    const model = await getModel(Collection.COUNCILORS, CouncilorSchemaMongo);
    const obj = await model.findOne({ uuid: data.uuid });
    if (!obj) {
      throw new Error("NO SE ENCUENTRA");
    }

    const dataToUpdate = { ...data };
    await obj.updateOne(dataToUpdate);

    // Aquí se maneja la posibilidad de que updatedObj sea null
    const updatedObj = await model.findOne({ uuid: data.uuid });
    if (!updatedObj) {
      throw new Error(
        "El objeto actualizado no se encontró en la base de datos"
      );
    }

    return { ...updatedObj.doc };
  } catch (error) {
    // Puedes manejar el error de acuerdo a tus necesidades aquí
    console.error("Error al actualizar el concejal:", error);
    throw error; // Puedes relanzar el error o manejarlo de otra manera
  }
};
