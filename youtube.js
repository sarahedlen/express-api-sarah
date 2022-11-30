let mongoose = require('mongoose')

// create a new schema
let mongoSchema = mongoose.Schema 

let youtubeCollection = new mongoSchema({
    "name": String,
    "likes": Number,
    "dislikes": Number,
},{
    collection:"youtube"
})


module.exports = mongoose.model("myyoutube", youtubeCollection)