import multer from 'multer';
import fs from 'fs';

const pdfDir = './Pdf';
if (!fs.existsSync(pdfDir)) {
  fs.mkdirSync(pdfDir);
}

var image = multer.diskStorage({
  destination: function (req, file, callback) {
    if (file.fieldname === "image") {
      callback(null, 'Image');
    } else if (file.fieldname === "video") {
      callback(null, 'Video');
    }  else if (file.fieldname === "audio") {
      callback(null, 'Audio');
    }  else if (file.fieldname === "pdf") {
      callback(null, 'Pdf');
    } else {
      callback(new Error("Invalid fieldname"));
    }
  },
  filename: function (req, file, callback) {
    const ext = file.mimetype.split("/")[1];
    callback(null, file.fieldname + "-" + Date.now() + "." + ext);
  }
});

export const document = multer({
  storage: image
});
