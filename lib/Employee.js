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
        return this.email;
    }

    getRole(){
        return this.role;
    }
}

module.exports = Employee