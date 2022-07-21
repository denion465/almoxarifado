import { Body, Controller, Get, Post } from '@nestjs/common';

import { ProductDto } from '../dto/product.dto';
import { ReqProductDto } from '../dto/req.product.dto';
import { ProductService } from '../service/product.service';

@Controller('/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/findAll')
  async findAll(): Promise<ProductDto[]> {
    return this.productService.findAll();
  }

  @Post('/create')
  async create(@Body() product: ReqProductDto): Promise<ProductDto> {
    return this.productService.create(product);
  }
}
