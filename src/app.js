const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const renderWithLayout = require('./utils/renderWithLayout');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.get('/', (req, res) => {
  renderWithLayout(res, 'index', {}, 'Головна');
});

app.get('/about', (req, res) => {
  renderWithLayout(res, 'about', {}, 'Про нас');
});

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`🚀 Сервер: http://localhost:${port}`);
});
