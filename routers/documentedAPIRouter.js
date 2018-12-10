const 
    express = require("express"),
    router = express.Router();

router.get("/", (req,res) => {
    res.json({
        documentation_url: "https://github.com/kimcaleb/Personal-Api",
        base_url: "placeholder",
        endpoints: [
            {
                method:"GET",
                path: "/api",
                desciption: "Describes all available endpoints"
            },
            {
                method: "GET",
                path: "/api/profile",
                description: "Who I am and where I'm from"
            },
            {
                method: "GET",
                path: "/api/projects",
                description: "Index of all the projects"
            },
            {
                method: "POST",
                path: "/api/projects",
                description: "Create a new project entry"
            },
            {
                method: "GET",
                path: "/api/projects/:id",
                description: "Retrieve specific project entry in collection"
            },
            {
                method: "PATCH",
                path: "/api/projects/:id",
                description: "updates a specific project entry"
            },
            {
                method: "DELETE",
                path: "/api/projects/:id",
                description: "deleted a specific project entry"
            }
        ]
    });
})

module.exports = router;