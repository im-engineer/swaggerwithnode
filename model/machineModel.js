import mongoose from "mongoose";
const machineSchema = mongoose.Schema({
  fileName: {
    type: String,
    required: false,
  },
  typeOfFile: {
    type: String,
    required: false,
    ennum: ["image", "video", "audio", "pdf"],
  },
  image: {
    type: Array,
  },
  video: {
    type: Array,
  },
  audio: {
    type: Array,
  },
  pdf: {
    type: Array,
  },
  created: {
    type: String,
    default: new Date().toISOString(),
  },
});
const machineTest = mongoose.model("post", machineSchema);
export default machineTest;
