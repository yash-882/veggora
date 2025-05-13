import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
            },
            message: 'Enter a valid Email.'
        },
        lowercase: true,
        unique: true,
        trim: true
    },
    mobileNumber: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^[0-9]{10}$/.test(value);
            },
            message: 'Enter a valid Phone Number'
        },
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 8,
        trim: true
    },
    confirmPassword: {
        type: String,
        required: [true, "Please confirm your password"],
        minlength: 8,
        trim: true,
        validate: {
            validator: function (pass){
                return this.password == pass;

            },
            message: "Please confirm your password correctly"
        }
    }
})