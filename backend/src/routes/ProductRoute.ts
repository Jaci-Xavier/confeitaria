import { Router } from 'express';
import Verify from '../middleware/Verify';

import ProductController from '../controller/ProductController';

const ProductRouter = Router();

ProductRouter.post(
  '/product/create',
  Verify.Description,
  Verify.Image,
  Verify.Price,
  Verify.Quantity,
  ProductController.createProduct,
  );

ProductRouter.get('/product', ProductController.getAllProducts);
ProductRouter.get('/product/:id', ProductController.getProductById);

export default ProductRouter;