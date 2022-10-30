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
    Thought.findOne({ _id: ObjectId(req.params._id) })
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
  },
  // delete a thought by its id
  deleteThought(req, res) {
    Thought.findOneAndDelete(
      { _id: ObjectId(req.params._id) },
      (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).json(err);
        } else {
          res.status(200).json(results);
        }
      }
    );
  },

  updateThought(req, res) {
    const filter = { _id: ObjectId(req.params._id) };
    const update = { thoughtText: req.body.thoughtText };

    Thought.findOneAndUpdate(filter, update, (err, result) => {
      if (result) {
        res.status(200).json(result);
        console.log(`Updated: ${result}`);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ message: 'something went wrong' });
      }
    });
  },

  addReaction(req, res) {
    const filter = { _id: ObjectId(req.params._id) };

    const data = {
      reactionBody: req.body.reactionBody,
      username: req.body.username
    };

    const update = { $push: { reactions: data } };

    Thought.findOneAndUpdate(filter, update, (err, result) => {
      if (result) {
        res.status(200).json(result);
        console.log(`Updated: ${result}`);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ message: 'something went wrong' });
      }
    });
  },

  updateReaction(req, res) {
    const filter = { thoughtId: ObjectId(req.params.thoughtId) };
    const update = { reactionBody: req.body.reactionBody };

    Thought.findOne(filter, (err, result) => {
      if (result) {
        Thought.findOneAndUpdate({ _id: ObjectId(req.params._id) }, update, (err, results) => {
          if (results) {
            res.status(200).json(results)
          } else {
            console.log('Uh Oh, something went wrong with updateing the reaction');
            res.status(500).json({ message: 'something went wrong with updating the reaction' });
          }
        })
      } else {
        console.log('Uh Oh, something went wrong with finding the thought');
        res.status(500).json({ message: 'something went wrong with finding the thought' });
      }
    });
  },
};
