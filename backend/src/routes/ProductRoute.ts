import { Router } from 'express';
import Verify from '../middleware/Verify';

import ProductController from '../controller/ProductController';

const ProductRouter = Router();

ProductRouter.post(
  '/product/create',
  Verify.IsAdmin,
  Verify.Description,
  Verify.Image,
  Verify.Price,
  Verify.Quantity,
  ProductController.createProduct,
  );

ProductRouter.get('/product', ProductController.getAllProducts);
ProductRouter.get('/product/:id', ProductController.getProductById);
ProductRouter.patch('/product/:id', Verify.IsAdmin, Verify.Price, Verify.Quantity, ProductController.updateProduct);
ProductRouter.delete('/product/:id', Verify.IsAdmin, ProductController.deleteProduct);

export default ProductRouter;