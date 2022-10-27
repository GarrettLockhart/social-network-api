const { model, Types, Schema } = require('mongoose');
const reactionSchema = require('./Reaction.js');

const thoughtSchema = new Schema(
  {
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
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return `${this.reactions.length}`;
  })
  .set(function (v) {
    this.set(function () {
      return `${v.reactions.length}`;
    });
  });

const Thought = new model('Thought', thoughtSchema);

module.exports = Thought;
