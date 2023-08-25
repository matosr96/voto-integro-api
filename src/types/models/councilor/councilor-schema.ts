import { Schema } from "mongoose";
import crypto from "crypto";
import { Councilor } from "./councilor";

export const CouncilorSchemaMongo = new Schema<Councilor>(
  {
    uuid: {
      type: String,
      required: true,
      unique: true,
      default: () => crypto.randomUUID(),
    },
    user: { type: String, required: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    identification: { type: Number, required: true },
    phone: { type: Number, required: true },
    status: { type: String, default: "active" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
