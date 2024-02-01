import { Request, Response } from 'express';
import ProductService from '../service/ProductService';

class ProductController {
  static async createProduct(req: Request, res: Response) {
    const { name, price, description, image, quantity } = req.body;

    const response = await ProductService.createProduct(name, price, description, image, quantity);

    return res.status(response.status).json(response.data.message);
  }
}

export default ProductController;