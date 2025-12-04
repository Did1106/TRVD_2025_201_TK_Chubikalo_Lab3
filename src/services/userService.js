const { v4: uuid } = require('uuid');
const repo = require('../data/userRepository');

exports.getUsers = () => repo.getAll();
exports.getUser = (id) => repo.getById(id);

exports.createUser = async (data, photo) => {
  const user = {
    id: uuid(),
    name: data.name,
    age: Number(data.age),
    city: data.city,
    bio: data.bio,
    photo: photo ? `img/${photo.filename}` : "img/default.jpg"
  };
  await repo.create(user);
};

exports.updateUser = async (id, data, photo) => {
  const update = {
    name: data.name,
    age: Number(data.age),
    city: data.city,
    bio: data.bio
  };
  if (photo) update.photo = `img/${photo.filename}`;
  await repo.update(id, update);
};

exports.deleteUser = (id) => repo.remove(id);
