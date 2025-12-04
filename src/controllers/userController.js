const userService = require('../services/userService');
const renderWithLayout = require('../utils/renderWithLayout');

exports.listUsers = async (req, res) => {
  const users = await userService.getUsers();
  renderWithLayout(res, 'users/list', { users }, 'Пошук');
};

exports.showCreateForm = (req, res) => {
  renderWithLayout(res, 'users/form', {
    action: "/users/create",
    buttonText: "Додати"
  }, 'Створити анкету');
};

exports.createUser = async (req, res) => {
  await userService.createUser(req.body, req.file);
  res.redirect('/users');
};

exports.showEditForm = async (req, res) => {
  const user = await userService.getUser(req.params.id);
  renderWithLayout(res, 'users/form', {
    action: `/users/edit/${user.id}`,
    buttonText: "Зберегти",
    user
  }, 'Редагування');
};

exports.updateUser = async (req, res) => {
  await userService.updateUser(req.params.id, req.body, req.file);
  res.redirect('/users');
};

exports.deleteUser = async (req, res) => {
  await userService.deleteUser(req.params.id);
  res.redirect('/users');
};
