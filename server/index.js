require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express'); // instance of the express framework;
const cors = require('cors'); // need CORS if JavaScript which is client side and in a webpage needs to make an HTTP request to an HTTP server with a different origin (scheme, hostname and/or port).

const app = express(); // initialize the server and make api request
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // support json encoded bodies

const db = require('./models');

// Routers
const postRouter = require('./routes/Posts');
app.use('/posts', postRouter);
const commentsRouter = require('./routes/Comments');
app.use('/comments', commentsRouter);
const usersRouter = require('./routes/Users');
app.use('/auth', usersRouter);
const likesRouter = require('./routes/Likes');
app.use('/likes', likesRouter);

app.use('/static', express.static('public/static'));
app.all('*', (req, res) =>
  res.sendFile('public/index.html', { root: __dirname })
);

db.sequelize.sync().then(() => {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Yay, your server is running on port ${PORT}`);
  });
});
