import Product from '../database/models/Product';
import SKU from '../database/models/SKU';

class ProductService {
  public static async createProduct(name: string, price: number, description: string,
    image: string, quantity: number) {
    await Product.create({ name, price, description, image });

    const product = await Product.findOne({ where: { name } });

    console.log(product);
    

    if (!product) {
      return { status: 500, data: { message: "Erro ao cadastrar produto!" } };
    }

    const id = Number(product?.id);
    
    await SKU.create({ product_id: id, quantity });

    return { status: 201, data: { message: "Produto cadastrado com sucesso!" } };
  }
}

export default ProductService;