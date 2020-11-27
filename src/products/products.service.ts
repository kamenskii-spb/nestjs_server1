import { CreateProductDto } from './dto/create-product.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {

    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>){

    }

    private products = []

    getAll(): Promise<Product[]>{
        return this.productModel.find().exec()
    }

    getById(id: string){
        return this.products.find( p => p.id === id)
    }

    create(productDto: CreateProductDto){
        this.products.push({
            ...productDto,
            id: Date.now().toString()
        })

    }
}
