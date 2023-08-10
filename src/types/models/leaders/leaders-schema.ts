import { Schema } from "mongoose";
import crypto from "crypto";
import { Leader } from "./leaders";

export const LeaderSchemaMongo = new Schema<Leader>(
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
    zone: { type: String, required: true },
    status: { type: String, default: "active" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
