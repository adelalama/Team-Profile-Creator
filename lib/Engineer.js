const Employee = require("./Employee");

class Engineer extends Employee{

    constructor(name, email, id, github){
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
    getRole(){
        return "Engineer";
    }

    getGithub(){
        return this.github;
    }

}

module.exports = Engineer;