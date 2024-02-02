import Product from '../database/models/Product';
import SKU from '../database/models/SKU';
const Sequelize = require('sequelize');
const config = require('../database/config/database');

const sequelize = new Sequelize(config);

class ProductService {
  public static async createProduct(name: string, price: number, description: string,
    image: string, quantity: number) {

    const t = await sequelize.transaction();
    try {
      const newProduct = await Product.create({ name, price, description, image }, { transaction: t });

      console.log(newProduct.dataValues.id);
      
      const product = await Product.findByPk(newProduct.dataValues.id, { transaction: t });
      
      if (!product) {
        return { status: 500, data: { message: "Erro ao cadastrar produto!" } };
      }
  
      const id = product?.id;
      
      await SKU.create({ product_id: id, quantity }, { transaction: t });

      await t.commit();
  
      return { status: 201, data: { message: "Produto cadastrado com sucesso!" } };

    } catch (error) {
      await t.rollback();
      return { status: 500, data: { message: "Erro ao cadastrar produto!" } };
    }
  }

  public static async getAllProducts() {
    const products = await Product.findAll({ include: { model: SKU, as: 'sku', attributes: { exclude: ['product_id']}}});

    return { status: 200, data: products };
  }

  public static async getProductById(id: string) {
    const product = await Product.findByPk(id, { include: { model: SKU, as: 'sku', attributes: { exclude: ['product_id']}}});

    if (!product) {
      return { status: 404, data: { message: "Produto não encontrado!" } };
    }

    return { status: 200, data: product };
  }



  // public static async updatePrice(name: string, price: number) {
  //   const product = await Product.findAll({ where: { name } });
    
  //   if (!product) {
  //     return { status: 404, data: { message: "Produto não encontrado!" } };
  //   }

  //   await Product.update({ price }, { where: { name } });
  // }
}

export default ProductService;