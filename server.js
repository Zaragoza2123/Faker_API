//pyhton flask way
// from flask import Flask  # Import Flask to allow us to create our app
// app = Flask(__name__)    # Create a new instance of the Flask class called "app"
const express = require("express"); //import express so we can use express features
const app = express(); // create an instance of express and store it in the variable "app"
const port = 8000;//indicate the port number to run on
const { faker } = require('@faker-js/faker'); // importing faker to create random vars
//python flask way
// @app.route('/')          # The "@" decorator associates this route with the function immediately following
// def hello_world():
//     return 'Hello World!'  # Return the string 'Hello World!' as a response

//Create 2 classes: User, Company with the same attributes as listed above
class User {
    constructor() {
        this._id = 0;
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName(); 
        this.phoneNumber = faker.phone.phoneNumberFormat(5);
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
//Create 2 classes: User, Company with the same attributes as listed above
class Company {
    constructor() {
        this._id = 0;
        this.name = faker.company.companyName();
        this.adress = [faker.address.streetAddress(),faker.address.city(),faker.address.state(),faker.address.zipCodeByState(),faker.address.country()]; // street,city,state,zipcode,country
    }
}


//these are my routes
app.get("/api", (req, res) =>{
    res.json({msg: "What's Poppin"})
})

//Create an api route "/api/users/new" that returns a new user
app.get("/api/users/new", (req,res) =>{
    res.json({count: 1, results: new User()});
})
//Create an api route "/api/companies/new" that returns a new company
app.get("/api/companies/new", (req,res) =>{
    res.json({count: 1, results: new Company()});
})
//Create an api route "/api/user/company" that returns both a new user and a new company
app.get("/api/user/company", (req,res) =>{
    res.json({count: 1, user: new User(), company: new Company() });
})








//bottom of code last line , this tells the app too listen for request on port 8000
app.listen( port, () => console.log(`Listening on port: ${port}`) );
//python flask way
// if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
//     app.run(debug=True)    # Run the app in debug mode.

