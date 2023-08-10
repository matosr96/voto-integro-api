import { Schema } from "mongoose";
import crypto from "crypto";
import { Zone } from "./zone";

export const ZoneSchemaMongo = new Schema<Zone>(
  {
    uuid: {
      type: String,
      required: true,
      unique: true,
      default: () => crypto.randomUUID(),
    },
    name: { type: String, required: true },
    status: { type: String, default: "active" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
