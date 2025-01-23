const mongoose = require('mongoose')

const mongooseurl = "mongodb://localhost:27017/nodeapi"
const connectDB = async() => {
    try {
        await mongoose.connect(mongooseurl);
        console.log("connected successfully");
    } catch (err) {
        console.error("not connected successfully", err.message);

    }
}
module.exports = connectDB;