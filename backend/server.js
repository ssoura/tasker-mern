const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/connectDB");
const taskRoutes = require("./src/routes/task-route");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
-app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

// Routes
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("API running...");
});

const PORT = process.env.PORT || 5000;
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
