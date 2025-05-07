import {Router} from "express"
const productRouter = Router();
import productController from "../../controllers/product-controller.js";

//product router
productRouter.route('/')
.get(productController.getProducts) // get products
.post(productController.createProduct) // create product
.delete(productController.deleteProducts) // delete products

productRouter.route('/:id')
.get(productController.getProductByID) //get product by ID
.delete(productController.deleteProductByID) //delete product by ID
.patch(productController.updateProductByID) //update product by ID
.put(productController.replaceProductByID) //replace product by ID


export default productRouter;