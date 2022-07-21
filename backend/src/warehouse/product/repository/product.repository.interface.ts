import { ProductDto } from '../dto/product.dto';

export interface IProductRepository {
  create(product: ProductDto): Promise<ProductDto>;
  findAll(): Promise<ProductDto[]>;
}
