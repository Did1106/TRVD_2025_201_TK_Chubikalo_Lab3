const { readJson, writeJson } = require('./fileHelper');
const FILE = 'users.json';

exports.getAll = () => readJson(FILE);
exports.getById = async (id) => (await readJson(FILE)).find(u => u.id === id);

exports.create = async (u) => {
  const users = await readJson(FILE);
  users.push(u);
  await writeJson(FILE, users);
};

exports.update = async (id, data) => {
  const users = await readJson(FILE);
  const idx = users.findIndex(u => u.id === id);
  if (idx !== -1) users[idx] = { ...users[idx], ...data };
  await writeJson(FILE, users);
};

exports.remove = async (id) => {
  const users = (await readJson(FILE)).filter(u => u.id !== id);
  await writeJson(FILE, users);
};
