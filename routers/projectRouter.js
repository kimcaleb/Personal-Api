const 
    express = require("express"),
    router = express.Router();
    Project = require("../controllers/project");


router.get("/",Project.index);
router.get("/:id", Project.show);
router.post("/", Project.create);
router.patch("/:id", Project.update);
router.delete("/:id", Project.destroy);


module.exports = router;