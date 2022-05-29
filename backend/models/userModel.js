const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Please add an Email'],
        unique:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'Please add a Password'],
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }
}, 
    {
        timestamps:true
    }
)

module.exports = mongoose.model('User',userSchema)