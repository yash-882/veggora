import mongoose from "mongoose"

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
    category:{
        type: String,
        required: [true, 'Please fill all the details of the product'],
        trim: true,
    },
    description: {
        type: String,
        trim:true,
        maxlength: 100,
        required: [true, 'Please fill all the details of the product'],

    },
    imageURLs:{
            type: [String],
    },
    inStock:{
        type: Boolean,
        required: [true, 'Please specify if it is available in the stock']
    },
    ratings: {
        type: Number,
        min: 0,
        max:5,
        default: 0
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const productModel = mongoose.model('products', productSchema);

export default productModel;
