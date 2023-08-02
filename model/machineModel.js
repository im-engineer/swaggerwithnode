import mongoose from "mongoose";
const machineSchema = mongoose.Schema({
    // firstName : {
    //     type : String,
    //     required : true
    // },
    // lastName : {
    //     type : String,
    //     required : true
    // },
    // email : {
    //     type : String,
    //     required : true
    // },
    // dateOfBirth : {
    //     type : String,
    //     required : true
    // },
    // residentialAddress1 : {
    //     type : String,
    //     required : true
    // },
    // residentialAddress2:{
    //     type : String,
    //     required : true
    // },
    // isChecked:{
    //     type:Boolean,
    //     default:false,
    // },
    // permanentAddress1:{
    //     type:String,
    //     required:false
    // },
    // permanentAddress2:{
    //     type:String,
    //     required:false
    // },
    fileName:{
        type:String,
        required:false
    },
    typeOfFile:{
        type:String,
        required:false,
        ennum:["image","video","audio","pdf"]
    },
    image: {
        type: Array
    },
    video: {
        type: Array
    },
    audio: {
        type: Array
    },
    pdf:{
        type: Array
    },
    created: {
        type: String,
        default: new Date().toISOString(),
    }
});
const machineTest = mongoose.model("post", machineSchema);
export default machineTest;