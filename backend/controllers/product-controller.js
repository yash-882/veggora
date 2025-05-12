import productModel from "../models/product-model.js";
import sendResponse from "../utils/functions/api-response.js"; //response handler
import handleQuery from '../utils/functions/handle-query.js'
import { productFields as validFields } from '../constants/DB-collections-fields.js'

// wraps async handler
function wrapper(func) {
    return (req, res, next) => {
        handleQuery(req, validFields) //handles query strings
        func(req, res, next).catch(next)
    }
}

// get product by ID
const getProductByID = wrapper(async (req, res, next) => {
    const product = await productModel.findById(req.params.id);

    // if no product associated with the specified ID exists
    if (!product) {
        return sendResponse(res, {
            statusCode: 404,
            message: "No product was found"
        })
    }

    // fetched successfully
    sendResponse(res, {
        statusCode: 200,
        data: product,
    })
})

// get all products
const getProducts = wrapper(async (req, res, next) => {
    const query = req.filteredQuery;
    console.log(query.filter);
    // querying in DB
    const products = await productModel.find(query.filter)
        .sort(query.sortingField)
        .select(query.select);

    // if no products were found
    if (!products.length) {
        return sendResponse(res, {
            statusCode: 404,
            message: "No products were found"
        })
    }
    // fetched successfully
    sendResponse(res, {
        statusCode: 200,
        data: products,
        dataLength: products.length
    })
})

// create product
const createProduct = wrapper(async (req, res, next) => {

    const product = await productModel.create(req.body);

    // checks if multiple products are created
    const isArrayOfProducts = Array.isArray(product);

    // creation successful, sending created product(s) 
    sendResponse(res, {
        statusCode: 201,
        message: !isArrayOfProducts ? 'Product has been created' : 'Products have been created',
        data: product,
        dataLength: product.length
    })
})

// delete product by ID
const deleteProductByID = wrapper(async (req, res, next) => {
    let product = await productModel.findByIdAndDelete(req.params.id);

    if (!product) {
        return sendResponse(res, {
            message: 'No product was found to delete',
            statusCode: 404,
        });
    }

    // deletion successful
    res.status(204).end();
})

// delete products
const deleteProducts = wrapper(async (req, res, next) => {
    const query = req.filteredQuery
    const result = await productModel.deleteMany(query.filter);

    // no products are found
    if (!result.deletedCount) {
        return sendResponse(res, {
            message: 'No products were found to delete',
            statusCode: 404,
        });
    }
    // deletion successful
    res.status(204).end();
})

const updateProducts = wrapper(async (req, res, next) => {
    const query = req.filteredQuery
    const result = await productModel.updateMany(query.filter, { '$set': req.body });

    // no products are found
    if (!result.modifiedCount) {
        return sendResponse(res, {
            message: 'No products were found to update',
            statusCode: 404,
        });
    }
    // updation successful
    sendResponse(res, {
        message: 'Products have been updated',
        statusCode: 200,
    });
})


// update product by ID
const updateProductByID = wrapper(async (req, res, next) => {
    const product = await productModel
        .findByIdAndUpdate(req.params.id, req.body,
            {
                runValidators: true, //ensures that the field(s) to be updated doesn't break the schema rules
                new: true // returns newly updated product if true 
            }
        );

    if (!product){
        return sendResponse(res, {
            statusCode: 404,
            message: 'No product was found to update',
        })
    }

        // updation successful, sending updated products
        sendResponse(res, {
            statusCode: 200,
            message: 'Product has been updated',
            data: product,
        })
})

const replaceProductByID = wrapper(async (req, res, next) => {
    const product = await productModel.findByIdAndReplace(req.params.id, req.body);

    if (!product) {
        return sendResponse(res, {
            statusCode: 404,
            message: "No product associated with the ID was found"
        })
    }

    sendResponse(res, {
        statusCode: 200,
        message: "Product has been replaced"
    })
})

export default {
    createProduct,
    deleteProductByID,
    updateProductByID,
    getProductByID,
    replaceProductByID,
    getProducts,
    deleteProducts,
    updateProducts
}