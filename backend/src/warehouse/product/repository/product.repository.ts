import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';

import { ProductDto } from '../dto/product.dto';
import { Product } from '../entity/product.entity';
import { IProductRepository } from './product.repository.interface';

@Injectable()
export class ProductRepository implements IProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) {}

  async create(product: ProductDto): Promise<ProductDto> {
    return plainToInstance(
      ProductDto,
      await this.productRepository.save(product)
    );
  }

  async findAll(): Promise<ProductDto[]> {
    const products = await this.productRepository.find();

    return plainToInstance(ProductDto, products);
  }
}
