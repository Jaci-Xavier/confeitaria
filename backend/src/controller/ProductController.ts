import { Request, Response } from 'express';
import ProductService from '../service/ProductService';

class ProductController {
  static async createProduct(req: Request, res: Response) {
    const { name, price, description, image, quantity } = req.body;

    const response = await ProductService.createProduct(name, price, description, image, quantity);

    return res.status(response.status).json(response.data.message);
  }

  static async getAllProducts(_req: Request, res: Response) {
    const response = await ProductService.getAllProducts();

    return res.status(response.status).json(response.data);
  }

  static async getProductById(req: Request, res: Response) {
    const { id } = req.params;

    const response = await ProductService.getProductById(id);

    return res.status(response.status).json(response.data);
  }

  static async updateProduct(req: Request, res: Response) {
    const { id } = req.params;
    const { price, quantity } = req.body;

    const response = await ProductService.updateProduct(id, price, quantity);

    return res.status(response.status).json(response.data);
  }

  static async deleteProduct(req: Request, res: Response) {
    const { id } = req.params;

    const response = await ProductService.deleteProduct(id);

    return res.status(response.status).json(response.data);
  }
}

export default ProductController;