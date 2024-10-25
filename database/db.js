const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose
    .connect(
      "mongodb+srv://root:admin@cluster0.a6s19.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("MongoDB Atlas conectado");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectToDB;
