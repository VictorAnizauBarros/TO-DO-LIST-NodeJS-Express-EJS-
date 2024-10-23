const routes = require("express").Router();
const taskController = require("../controllers/TaskController");

routes.get("/", taskController.getAll);

module.exports = routes;
