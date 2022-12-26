const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    topic:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    postCategory:{
        type:String,
        required:true,
    },
},
{
    timestamps: true,
    versionKey: false, // Here You have to add.
}
);

module.exports = mongoose.model(`post`,postSchema);


