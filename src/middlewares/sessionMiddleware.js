const expressSession = require("express-session");
const pgSession = require('connect-pg-simple')(expressSession);

const { Client } = require("pg");

const client = new Client(process.env.PGDATABASE);

client.connect();

const sessionMiddleware = expressSession({
  store: new pgSession({
    pool : client,
    tableName : 'user_session',
    createTableIfMissing: true
  }),
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
});

module.exports = sessionMiddleware;
