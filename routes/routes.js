const routes = require("express").Router();
const taskController = require("../controllers/TaskController");

routes.get("/", taskController.getAllTasks);
routes.post("/create", taskController.createTask);
routes.get("/getById/:id/:method", taskController.getById);
routes.post("/updateOne/:id", taskController.updateOneTask);
routes.get("/deleteOne/:id", taskController.deleteOneTask);
routes.get("/check/:id", taskController.taskCheck);

module.exports = routes;
