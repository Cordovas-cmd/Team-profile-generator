 //require name, id , email, role, github username
// //require method getname(), getID(), getRole(), getGit();
//exports engineer
const Employee = require('./Employee');

class Engineer extends Employee{
    constructor (name, email, id, role, gitHub) {
        //pass original parameter of employee to function
        super(name, email, id, role)
        this.gitHub = gitHub;
    }

    getGitHub(){
        return this.gitHub;
    }
}
//exporting 
module.exports = Engineer;