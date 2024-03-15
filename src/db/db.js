const mongoose = require("mongoose");
const { DATABASE } = require("../utils/config");

const uri = `mongodb://${DATABASE.USERNAME}:${DATABASE.PASSWORD}@localhost:27017/`;

const connectDb = () => {
    mongoose.connect(uri)
        .then(() => {
            console.log(`Database connected with success`);
        }).catch((error) => {
            console.error(`Error connecting to database`, error.message);
        })
};

module.exports = connectDb;