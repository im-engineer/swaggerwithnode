import mongoose from "mongoose";

import machine from "../model/machineModel";

export const addMachineDetails = async (req, res) => {
  const machineDetailsEntry = new machine({
    fileName: req.body.fileName,
    typeOfFile: req.body.typeOfFile,
    image: req.files.image,
    video: req.files.video,
    audio: req.files.audio,
    pdf: req.files.pdf,
  });
  const documentData = await machineDetailsEntry.save();
  if (documentData) {
    res.send({
      status: true,
      message: "Document Added",
      result: documentData,
    });
  }
};
