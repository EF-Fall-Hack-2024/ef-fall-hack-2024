const mongoose = require("mongoose");
const uuid = require("node-uuid");
const Schema = mongoose.Schema;


const taskSchema = new Schema({
    taskId: {type: String, default: ()=>uuid.v1()},
    projectId: {type: String}, // Linking to project
    description: {type: String}, // Description of the task
    priority: {type: Number}, // 1 -> Low Priority, 2 -> Medium Priority, 3 -> High Priority
    progress: {type: Number, default: 1} // 1 -> Todo, 2 -> In Progress, 3 -> Done
})

module.exports = mongoose.model("Task", taskSchema)
