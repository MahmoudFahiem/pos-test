const express = require("express");
const logger = require("morgan");
const dotenv = require("dotenv").config();
const app = express();

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes

module.exports = app;
