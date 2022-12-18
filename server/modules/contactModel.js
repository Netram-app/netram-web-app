
const mongoose = require('mongoose')
const contactSchema = new mongoose.Schema({

   your_name:{
        type:String,
    },
    your_email:{
        type:String,
    },
    subject:{
        type:String,
    },
    message:{
        type:String,
    },


},{timestamps: true})

module.exports = mongoose.model('Contact', contactSchema)