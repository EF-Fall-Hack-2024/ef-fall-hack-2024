const mongoose = require("mongoose");
const uuid = require("node-uuid");
const Schema = mongoose.Schema;


const projectSchema = new Schema({
    userId: {type: String},
    projectId: {type: String, default: ()=>uuid.v1()},
    description: {type: String},
    budget: {type: Number},
})


module.exports = mongoose.model("Project", projectSchema)
