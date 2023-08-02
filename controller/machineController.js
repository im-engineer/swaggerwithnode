import mongoose from "mongoose";

import machine from '../model/machineModel';


export const addMachineDetails = async (req, res) => {
    const machineDetailsEntry = new machine({
        // firstName:req.body.firstName,
        // lastName:req.body.lastName,
        // email:req.body.email,
        // dateOfBirth:req.body.dateOfBirth,
        // residentialAddress1:req.body.residentialAddress1,
        // residentialAddress2:req.body.residentialAddress2,
        // isChecked:req.body.isChecked,
        // permanentAddress1:req.body.permanentAddress1,
        // permanentAddress2:req.body.permanentAddress2,
        fileName:req.body.fileName,
        typeOfFile:req.body.typeOfFile,
        image: req.files.image,
        video: req.files.video,
        audio: req.files.audio,
        pdf: req.files.pdf
    })
    const documentData = await machineDetailsEntry.save();
    if (documentData) {
        res.send({
            status: true, message: 'Document Added',
            result: documentData
        })
    }
}