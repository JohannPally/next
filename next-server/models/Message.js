const  mongoose  = require("mongoose");
const  Schema  =  mongoose.Schema;
const  msgSchema  =  new Schema(
    {
    message: {
    type: String
    },
    sender: {
    type: String
        }
    },
        {
    timestamps: true
});

let  Message  =  mongoose.model("Message", msgSchema);
module.exports  =  Message;