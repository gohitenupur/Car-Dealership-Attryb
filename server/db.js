const mongoose = require("mongoose");

const mongoDB =()=>{
    mongoose.connect(process.env.BASE_URL,{useNewUrlParser: true,
        useUnifiedTopology: true})
        .then(()=>{
            console.log("connection established");
        })
        .catch((err)=>{
            console.log("connection error:"+err.message);
        })
}

module.exports = mongoDB