const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    estado:{
        type:Boolean,
        required:true
    },
    posicion:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("User",userSchema)