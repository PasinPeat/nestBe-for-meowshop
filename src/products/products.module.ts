import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema, Product } from './schemas/product.schema';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
