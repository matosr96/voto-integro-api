import { Collection, getModel } from "../../constants-definitions";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PartialUser, User, UserSchemaMongo } from "../../types";

export const signup = async (data: PartialUser): Promise<User | Error> => {
  console.log(
    "la paswwords del signup ============================>",
    data.password
  );
  const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "";
  const model = await getModel(Collection.USERS, UserSchemaMongo);
  const password = await bcrypt.hashSync(data.password || "", 10);
  const user = await new model({ ...data, password });
  if (!user) return new Error("101");
  const token = await jwt.sign({ uuid: user.uuid }, JWT_SECRET_KEY, {
    expiresIn: "12h",
  });
  await user.save();
  return { token, ...user._doc };
};
