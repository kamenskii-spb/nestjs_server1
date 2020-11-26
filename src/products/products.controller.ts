import { ProductsService } from './products.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Redirect } from '@nestjs/common';


@Controller('products')
export class ProductsController {

    constructor(
        private readonly productService: ProductsService
        ){

    }

    @Get()
    //@Redirect('https://google.com', 301)
    getAll(){
        return this.productService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: string): string{
        return this.productService.getById(id)
    }
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    create(@Body() CreateProductDto: CreateProductDto){
        return  this.productService.create(CreateProductDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return 'remove' + id
    }

    @Put(':id')
    update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string){
        return 'update' + id
    }
}
