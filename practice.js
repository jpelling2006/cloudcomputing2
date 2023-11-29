const person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColour:"blue",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};