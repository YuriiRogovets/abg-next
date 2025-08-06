import mongoose from "mongoose";

const puttySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    brand:{
      type: String,
      required: false,
      default: "Semin",
    },
    category: {
      type: String,
      required: true,
      enum: ["Будівельні суміші Semin"],
    },
    subgroup: {
      type: String,
      enum: ["шпаклівки", "грунтовки", "клеї", "герметики"],
    },
    application: [
      {
        type: String,
        enum: [
          "фінішна",
          "стартова",
          "еластична",
          "для механізованого нанесення",
          "для дерева ",
          "для зовнішніх робіт",
          "для внутрішніх робіт",
          "для роботи  з ГКЛ",
          "вологостійка",
          "для склохолста",
          "для шпалер",
        ],
      },
    ],
    substance: {
      type: String,
      required: true,
      enum: ["готова", "порошкоподібна"],
    },
    packing: {
      type: String,
      required: true,
      enum: [
        "300 g",
        "290 ml",
        "310 ml",
        "0,5 kg",
        "1 kg",
        "1,5 kg",
        "5 kg",
        "7 kg",
        "10 kg",
        "15 kg",
        "20 kg",
        "25 kg",
        "1 l",
        "5 l",
        "10 l",
        "15 l",
        "17 l",
        "10 m",
        "20 m",
        "23 m",
        "45 m",
        "75 m",
        "90 m",
        "150 m",
      ],
    },

    price: {
      type: Number,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },

    availability: {
      type: String,
      required: false,
      default: " ",
    },
    favorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  { timestamps: true }
);

const Putty = mongoose.model("putty", puttySchema);

export default Putty;
