import {Router} from "express"
const adminRouter = Router();
import productRouter from "./product-router.js";

// product router path
adminRouter.use('/products', productRouter);

export default adminRouter;


