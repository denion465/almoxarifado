import { Controller, Get } from '@nestjs/common';

import { ProductDto } from '../dto/product.dto';
import { ProductService } from '../service/product.service';

@Controller('/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/findAll')
  async findAll(): Promise<ProductDto[]> {
    return this.productService.findAll();
  }
}
