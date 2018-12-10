const 
    express = require("express"),
    router = express.Router();


router.get("/", (req,res) => {
    function calculateDaysOld() {
        var startTime = new Date("1991-03-12");
        var endTime = new Date();
        var timeDifference = Math.round((endTime - startTime)/1000/60/60/24);
        return timeDifference;
    }

    res.json({
        name: "Caleb Kim",
        githubUsername: "kimcaleb",
        githubLink: "https://github.com/kimcaleb/Personal-Api",
        personalSiteLink: "https://kimcaleb.github.io/My-Web-Portfolio/",
        currentCity: "Lakewood",
        daysOld: `${calculateDaysOld()}`
    });
});

module.exports = router;