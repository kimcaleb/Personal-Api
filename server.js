// 1. If dotenv was installed and added to dependencies, import module and call config() method to configure that dependecy for our use in this project. 
require("dotenv").config();
// 2. Create require variables. 
const 
    express = require("express"), //import express module. 
    app = express(); // call express function and store result in variable so we can use that variable to use the features of the express framework. 
    PORT = process.env.PORT || 3000, // create PORT variable using process.env for security reasons. 
    logger = require("morgan"); // import morgan module to have logging request details capabilities. 

// 3. Establish Database Connection
    require("./db"); // Actual connection configuration will be done in separate file. 

// 4. Configure App Middleware
    app.use(express.json()); // This provides the ability for server to parse json objects on the req. body so that we can manipulate/use the data in javascript.
    // app.use(express.static(path.join(__dirname,"public","views"))); // use method means we are using middleware. This express.static handles path specification when sending response files.
    // app.use(express.static(path.join(__dirname,"public","style")));
    // app.use(express.static(path.join(__dirname,"public","js")));
    app.use(logger("dev")); 

// 5. Establish Routes using Routers
    const profileRouter = require("./routers/profileRouter");
    const projectRouter = require("./routers/projectRouter");
    app.use("/api/profile", profileRouter);
    app.use("/api/projects", projectRouter);


// 6. Listen on Port (Basically deploy server to localhost)
    app.listen(PORT, err => {
        console.log(err || `Listening on Port ${PORT}`);
    });

