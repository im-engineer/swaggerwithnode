// app.json
import express from "express";
const router = express.Router();
import { document } from "../middleware/Upload";
import { addMachineDetails } from "../controller/machineController";

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User-related operations
 *
 * /user/addMachineDetails:
 *   post:
 *     summary: Add machine details
 *     tags: [User]
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - name: image
 *         in: formData
 *         type: file
 *         description: "The image files to upload (maxCount: 10)"
 *       - name: pdf
 *         in: formData
 *         type: file
 *         description: "The PDF files to upload (maxCount: 10)"
 *     responses:
 *       '200':
 *         description: "Machine details added successfully"
 */
router.post(
  "/addMachineDetails",
  document.fields([
    { name: "image", maxCount: 10 },
    { name: "pdf", maxCount: 10 },
  ]),
  addMachineDetails
);

export default router;
