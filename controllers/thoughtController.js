const { Thought } = require('../models');
// Bringing in ObjectId from mongodb npm so that we can pass it in the body and find a user by their id
const ObjectId = require('mongodb').ObjectId;

module.exports = {

  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  // Get a single thought using th body payload containing the objectid of the thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: ObjectId(req.body._id) })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // create a new thought in the db
  createThought(req, res) {
    Thought.create(req.body)
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  }
};
