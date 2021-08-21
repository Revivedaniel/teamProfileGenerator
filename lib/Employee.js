class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
    }

    getName() {
        if (typeof(this.name) != "string") {
            throw new Error("Name needs to be a string")
        } else {
        return this.name;
        }
    }

    getId() {
        if (typeof(this.id) != "number") {
            throw new Error("Id needs to be a number")
        }else {
            return this.id;
        }
    }

    getEmail(){
        //testing if the email has valid characters before and after the @ and there is a dot something
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))
        {
          return this.email;
        }else {
            throw new Error("Email needs to be in the following format email@website.com");
        };
      };

    getRole(){
        return this.role;
    }
}

module.exports = Employee