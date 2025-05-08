import mongoose from "mongoose"
import str from "../utils/functions/string-operations.js"

// product schema
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please fill all the details of the product'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Please fill all the details of the product']
    },
    category: {
        type: String,
        required: [true, 'Please fill all the details of the product'],
        trim: true,
        lowercase: true
    },
    description: {
        type: String,
        trim: true,
        maxlength: 100,
        required: [true, 'Please fill all the details of the product'],

    },
    imageURLs: {
        type: [String],
    },
    inStock: {
        type: Boolean,
        required: [true, 'Please specify if it is available in the stock']
    },
    ratings: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
})
productSchema.pre('save', function (next) {
    // removing extra whitespace between the characters 
    if(this.name.includes('  '))
        this.name = str.removeWhiteSpace(this.name)

    if(this.description.includes('  '))
        this.description = str.removeWhiteSpace(this.description)

    // checks if prod name is already in name case
    let isInNameCase = /^([A-Z][a-z]*)(\s[A-Z][a-z]*)*$/.test(this.name);
    if (isInNameCase)
        next();

    // converts string to NameCase
    this.name = str.toNameCase(this.name)
    next()
})

const productModel = mongoose.model('products', productSchema);

export default productModel;
