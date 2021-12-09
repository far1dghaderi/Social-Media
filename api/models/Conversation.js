const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema({
  members: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Conversation", ConversationSchema);
