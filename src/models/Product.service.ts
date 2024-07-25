import { T } from "../libs/types/common";
import { ProductStatus } from "../libs/enums/product.enum";
import { shapeIntoMongooseObjectId } from "../libs/config";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { Product, ProductInput, ProductInquiry, ProductUpdateInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import { ObjectId } from "mongoose";


class ProductService {
    private readonly productModel;
    constructor() {
        this.productModel = ProductModel;
    }

  // SPA

  public async getProducts (inquiry: ProductInquiry): Promise<Product[]> {
    const match: T = {productStatus: ProductStatus.PROCESS};
    
    if(inquiry.productCollection) 
      match.productCollection = inquiry.productCollection;
    if(inquiry.search) {
      match.productName = {$regex: new RegExp(inquiry.search, "i")}
    }

    const sort: T = 
    inquiry.order === "productPrice"  
     ? {[inquiry.order]: 1 }
     : {[inquiry.order]: -1 };

     const result = await this.productModel
     .aggregate([
        {$match: match},
        {$sort: sort}, 
        {$skip: (inquiry.page * 1 -1 ) * inquiry.limit }, // 3 X 1,2,3    skip 1,2,3
        {$limit: inquiry.limit * 1 },                     // 3 => 4,5,6   and get  
     ])
     .exec();
     if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result;
  }

  public async getProduct(
    memberId: ObjectId | null, 
    id: string
  ): Promise<Product> {
    const productId = shapeIntoMongooseObjectId(id);

    let result = await this.productModel
    .findOne({
      _id: productId, 
      productStatus: ProductStatus.PROCESS,
     })
     .exec();
    if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

     //TODO: if auth user => first => view log creation

    return result;
  }
  // SSR

  public async getAllProducts() : Promise<Product[]> {
   //string => objectId
      const result = await this.productModel.find().exec();
      if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
      // console.log("result:", result);
      return result;
  }

  public async createNewProduct(input: ProductInput): Promise<Product> {
    try{
        return await this.productModel.create(input);
    } catch(err) {
        console.error("Error, model:createNewProduct:", err)
        throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    } 
  }

  public async updateChosenProduct(
    id: string,
    input: ProductUpdateInput):
     Promise<Product> {
   //string => objectId
      id = shapeIntoMongooseObjectId(id);
      const result = await this.productModel.
      findByIdAndUpdate({ _id: id }, input, {new:true} ).exec();
      if(!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);
      // console.log("result:", result);
      return result;
  }
}

export default ProductService;