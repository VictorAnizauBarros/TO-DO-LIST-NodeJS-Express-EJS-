// Importa o modelo de Task
const Task = require("../models/Task");

let message = "";
let type = "";

// Função para lidar com erros
function handleError(res, error) {
  // Retorna uma resposta com status 500 e a mensagem de erro
  res.status(500).send({ error: error.message });
}

// Função para obter todas as tasks
const getAllTasks = async (req, res) => {
  try {
    setTimeout(() => {
      message = "";
    }, 2000);
    // Busca todas as tasks no banco de dados
    const tasksList = await Task.find();
    // Renderiza a página index com a lista de tasks
    return res.render("index", {
      tasksList,
      task: null,
      taskDelete: null,
      message,
      type,
    });
  } catch (error) {
    // Chama a função para lidar com erros
    handleError(res, error);
  }
};

// Função para criar uma nova task
const createTask = async (req, res) => {
  // Obtém os dados da task do corpo da requisição
  const task = req.body;

  // Verifica se a task tem um título
  if (!task.task) {
    message = "Insira um texto, antes de adicionar uma nova tarefa!";
    type = "danger";
    // Redireciona para a página inicial se não tiver título
    return res.redirect("/");
  }
  try {
    // Cria uma nova task no banco de dados
    await Task.create(task);
    message = "Tarefa criada com sucesso.";
    type = "success";
    // Redireciona para a página inicial após criar a task
    return res.redirect("/");
  } catch (error) {
    // Chama a função para lidar com erros
    handleError(res, error);
  }
};

// Função para obter uma task por ID
const getById = async (req, res) => {
  try {
    // Busca todas as tasks no banco de dados
    const tasksList = await Task.find();
    // Verifica se o método é update
    if (req.params.method == "update") {
      // Busca a task por ID se o método for update
      const task = await Task.findOne({ _id: req.params.id });
      // Renderiza a página index com a task e a lista de tasks
      res.render("index", { task, taskDelete: null, tasksList,message,type });
    } else {
      // Busca a task por ID se o método não for update
      const taskDelete = await Task.findOne({ _id: req.params.id });
      // Renderiza a página index com a task e a lista de tasks
      res.render("index", { task: null, taskDelete, tasksList,message,type });
    }
  } catch (error) {
    // Chama a função para lidar com erros
    handleError(res, error);
  }
};

// Função para atualizar uma task
const updateOneTask = async (req, res) => {
  try {
    // Obtém os dados da task do corpo da requisição
    const task = req.body;
    // Atualiza a task no banco de dados
    await Task.updateOne({ _id: req.params.id }, task);
    message = "Tarefa atualizada com sucesso!";
    type = "success";
    // Redireciona para a página inicial após atualizar a task
    res.redirect("/");
  } catch (error) {
    // Chama a função para lidar com erros
    handleError(res, error);
  }
};

// Função para deletar uma task
const deleteOneTask = async (req, res) => {
  try {
    // Deleta a task no banco de dados
    await Task.deleteOne({ _id: req.params.id });
    message = "Tarefa deletada com sucesso!";
    type = "success";
    // Redireciona para a página inicial após deletar a task
    res.redirect("/");
  } catch {
    // Chama a função para lidar com erros
    handleError(res, error);
  }
};

// Exporta as funções para serem usadas em outros arquivos
module.exports = {
  getAllTasks,
  createTask,
  getById,
  updateOneTask,
  deleteOneTask,
};
