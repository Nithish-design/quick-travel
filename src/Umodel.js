const mongoose = require("mongoose")
const { Schema} = mongoose

const sampleSchema = new Schema ({
    name : {type:String}, 
    username:{type:String},
    gender : {type:String},
    phonenumber :{type:Number},
    age:{type:Number},
    email:{type:String},
    password:{type:String},
    confirmpassword:{type:String},

},
{
    suppressReservedKeysWarning:true // suppress the warnig
}
);
module.exports = mongoose.model("Usercollection",sampleSchema)