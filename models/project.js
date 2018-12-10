const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    githubRepoUrl: String,
    deployedUrl: String,
    screenshot: String
}, {timestamps:true});

const Project = mongoose.model("Project",projectSchema);

module.exports = Project;