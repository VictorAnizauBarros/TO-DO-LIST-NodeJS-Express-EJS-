const routes = require("express").Router();
const taskController = require("../controllers/TaskController");

routes.get("/", taskController.getAllTasks);
routes.post("/create", taskController.createTask);

module.exports = routes;
