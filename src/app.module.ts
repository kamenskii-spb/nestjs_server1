import { ProductsModule } from './products/products.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot(`mongodb://dimak:55555bb@ds257668.mlab.com:57668/nestjs-server`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
