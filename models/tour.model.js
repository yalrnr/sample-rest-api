const mongoose = require('mongoose')

// Schema for the model

const tourSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true,'enter name pls']
    },
    price: {
        type : Number,
        required: [true, 'enter price pls']
    },
    description: {
        type:String
    },
    plan: {
        type: String,
        required: [true,'plan is must'],
        enum : {
            values : ['silver','gold','diamond'],
            message : 'plan is either silver, gold or diamond'
        }
    }
});

const tourModel = mongoose.model('Tour',tourSchema);

module.exports = tourModel