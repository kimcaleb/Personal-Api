

// var $buttons = $(".button").on("click","")



//create submit button

$("#createsubmit").on("click", (evt) => {
    //first check whether there is content on at least Name form. If not, alert user. 
    evt.preventDefault();
    //Extract content from form and store into variables. 
    let $inputContent = $(".createfield");
    
    if ( $("#name")[0].value === "") {
        alert("You must include the name of the project in order to submit a new project");
    } else {
        //just include relative path. 
        axios.post("/api/projects", 
        {
            name: `${$inputContent[0].value}`,
            description: `${$inputContent[1].value}`,
            githubRepoUrl: `${$inputContent[2].value}`,
            deployedUrl: `${$inputContent[3].value}`,
            screenshot: `${$inputContent[4].value}`
        }).then((res => {
            alert("creation successful");
        }));
    }

});