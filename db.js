import mongoose from "mongoose";
import config from "config";

var mongoUrl = `mongodb://${config.db.host}:${config.db.port}/${config.db.databaseName}`;
console.log(mongoUrl, "mongoUrl");
var options = {
  user: config.userName,
  pass: config.password,
};

export const mongoconnection = async () => {
  try {
    await mongoose.connect(mongoUrl, options);
    console.log("Connect to DB");
  } catch (e) {
    console.log(e);
    throw e;
  }
};
