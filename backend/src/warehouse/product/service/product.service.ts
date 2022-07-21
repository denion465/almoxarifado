import { Inject, Injectable } from '@nestjs/common';

import { ProductDto } from '../dto/product.dto';
import { ProductRepository } from '../repository/product.repository';
import { IProductRepository } from '../repository/product.repository.interface';

@Injectable()
export class ProductService {
  constructor(
    @Inject(ProductRepository)
    private readonly productRepository: IProductRepository
  ) {}

  async findAll(): Promise<ProductDto[]> {
    return this.productRepository.findAll();
  }
}
