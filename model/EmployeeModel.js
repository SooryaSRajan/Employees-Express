const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    EmployeeId: {
        type: Number,
        required: true,
        minlength: 3,
        unique: true
    },
    Name: {
        type: String,
        required: true,
        minlength: 3,
    },
    Qualification: {
        type: String,
        minlength: 3,
        required: true,
    },
    Designation: {
        type: String,
        required: true,
    },
    Salary: {
        type: Number,
        required: true,
    },

}, {
    versionKey: false
});

const EmployeeModel = mongoose.model(
    "EmployeeSchema",
    EmployeeSchema
);

module.exports = EmployeeModel;
