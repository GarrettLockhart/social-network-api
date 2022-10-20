const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3001;

// setting up express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
});
