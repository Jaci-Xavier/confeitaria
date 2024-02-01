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

export default ProductRouter;