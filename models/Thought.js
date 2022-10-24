const { model, Types, Schema } = require('mongoose');
const reactionSchema = require('./Reaction.js');

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema]
});

const Thought = new model('Thought', thoughtSchema);

module.exports = Thought;