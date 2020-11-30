import { ProductsModule } from './products/products.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot(`mongodb+srv://dimak:55555bb@cluster0.vysib.mongodb.net/nestserver?retryWrites=true&w=majority
  `)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
