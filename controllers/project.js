const Project = require("../models/project");

module.exports = {
    index: (req,res) =>{
        Project.find({}, (err,projects) =>{
            if (err) res.json({success:false,err});
            res.json({success:true, projects});
        });
    },
    show: (req,res) => {
        Project.findById(req.parama.id, (err,project) => {
            if (err) res.json({success:false,err});
            res.json({success:true, project});
        });
    },
    create: (req,res) => {
        Project.create(req.body,(err,newProject)=>{
            if (err) res.json({success:false,err});
            res.json({success:true, newProject});
        });
    },

    update: (req,res) => {
        Project.findByIdAndUpdate(req.params.id,{new:true},(err,project) =>{
            if (err) res.json({success:false,err});
            res.json({success:true,project});
        })
    },
    destroy: (req,res) => {
        Project.findByIdAndRemove(req.params.id, (err,removedproject) => {
            if (err) res.json({success:false,err});
            res.json({success:true, removedproject});
        });
    }
}