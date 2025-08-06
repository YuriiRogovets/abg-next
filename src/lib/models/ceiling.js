import mongoose from "mongoose";

const ceilingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    brand: String,

    category: {
      type: String,
      required: true,
      enum: ["підвісні стелі"],
    },
    subgroup: {
      type: String,
      required: true,
      enum: ["плити підвісної стелі", "підвісна система", "грильято"],
    },
    price: Number,
    series: String,
    size: String,
    material: String,

    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Ceiling = mongoose.model("ceiling", ceilingSchema);

export default Ceiling;
