const mongoose = require('mongoose')

const StudentSchema = mongoose.Schema({
    RegistrationNumber: {
        type: Number,
        require: true,
    },

    Subject: {
        maths:{type: String, require: true},
        english:{type: String, require: true},
        accounting:{type: String, require: true},
     },

    SubjectsScore:[
     {maths: {type: Number, require: true}},
     {english: {type: Number, require: true}},
     {accounting: {type: Number, require: true}},
    ]

})

    

const SchoolModel = mongoose.model("SchoolModel", StudentSchema)

module.exports = SchoolModel

