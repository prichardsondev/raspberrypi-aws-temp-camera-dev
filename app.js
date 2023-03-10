//app.js - file we start
//app->router->controller->service->db


const express = require("express");
const path = require("path");
const routes = require("./api/router");
const os = require('os');

const app = express();

app.use(express.static(path.join(__dirname, "/api/public")));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
});

routes(app);

const port = process.env.EXPRESS_PORT || 5000;

const server = app.listen(port, () => console.log(`Listening on http://${os.hostname()}.local:${port}/`));

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
});
