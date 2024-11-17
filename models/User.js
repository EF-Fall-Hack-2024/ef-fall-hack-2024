const mongoose = require("mongoose");
const uuid = require("node-uuid");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    uid: {type: String, default: ()=>uuid.v1()},
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String}
});


module.exports = mongoose.model("User", userSchema)