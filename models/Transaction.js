const mongoose = require("mongoose");
const uuid = require("node-uuid");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  userId: { type: String }, // Linking to user
  projectId: { type: String }, // Linking to project
  amount: { type: Number }, // Amount spent on transaction
  category: { type: String }, // Category of Transaction (Materials, Labor, Permits, Equipment, Other)
});

module.exports = mongoose.model("Transaction", transactionSchema);
