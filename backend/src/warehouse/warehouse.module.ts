import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductController } from './product/controller/product.controller';
import { Product } from './product/entity/product.entity';
import { ProductRepository } from './product/repository/product.repository';
import { ProductService } from './product/service/product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductRepository, ProductService]
})
export class WarehouseModule {}
