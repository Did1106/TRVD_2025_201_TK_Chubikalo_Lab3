const renderWithLayout = (res, view, data = {}, title = '') => {
  res.render(view, data, (err, html) => {
    if (err) throw err;
    res.render('layout', {
      title,
      content: html
    });
  });
};

module.exports = renderWithLayout;
