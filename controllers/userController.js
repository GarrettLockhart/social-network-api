const { User } = require('../models');
// Bringing in ObjectId from mongodb npm so that we can pass it in the body and find a user by their id
const ObjectId = require('mongodb').ObjectId;

const handleError = (err) => console.error(err);

module.exports = {
  // Returns all users with no constraints
  getUsers(req, res) {
    User.find({})
      .populate({
        path: 'friends',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Finds a specific user by their GUID and returns only that user
  getSingleUser(req, res) {
    User.findOne({ _id: ObjectId(req.params._id) })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Takes the username and email fields payloads and passes that through to the db, creates a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  // Takes the ObjectId in the body and deletes it based on that
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: ObjectId(req.params._id) }, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      } else {
        res.status(200).json(results);
      }
    });
  },

  // find user by id in the endpoint params and update their username
  updateUser(req, res) {
    const filter = { _id: ObjectId(req.params._id) };
    const update = { username: req.body.username };

    User.findOneAndUpdate(filter, update, (err, result) => {
      if (result) {
        res.status(200).json(result);
        console.log(`Updated: ${result}`);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ message: 'something went wrong' });
      }
    });
  },

  // find target user by id in the endpoint params and add a friend using their id in the body
  addFriend(req, res) {
    const filter = { _id: ObjectId(req.params._id) };
    const update = { $push: { friends: ObjectId(req.body.friends) } };

    User.findOneAndUpdate(filter, update, (err, result) => {
      if (result) {
        res.status(200).json(result);
        console.log(`Updated: ${result}`);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ message: 'something went wrong' });
      }
    });
  },

  // find target user for which we are updating their friends list, and pull that friend out of the friends array
  updateFriends(req, res) {
    const filter = { _id: ObjectId(req.params._id) };
    const update = {
      $pullAll: {
        friends: [{ _id: req.body.friends }]
      }
    };

    User.findOneAndUpdate(filter, update, (err, result) => {
      if (result) {
        res.status(200).json(result);
        console.log(`Updated: ${result}`);
      } else {
        console.log(err);
        res.status(500).json(err);
      }
    });
  }
};
