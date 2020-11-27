import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Module } from "@nestjs/common";
import { Product, ProductSchema } from './schemas/product.schema';


@Module({
providers: [ProductsService],
controllers: [ProductsController],
imports: [MongooseModule.forFeature([
    {name: Product.name, schema: ProductSchema }
])]
})

export class ProductsModule {
    
}