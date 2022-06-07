const express = require("express");
const inputCheck = require("./utils/inputCheck");

const apiRoutes = require("./routes/apiRoutes");

const db = require("./db/connection");

const { PassThrough } = require("stream");
const { resourceLimits } = require("worker_threads");

const PORT = process.env.PORT || 3001;

const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//use api routes
app.use("/api", apiRoutes);

// Connect to database

//default response for any other request (not found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
