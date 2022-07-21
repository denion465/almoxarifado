import { ProductDto } from '../dto/product.dto';

export interface IProductRepository {
  findAll(): Promise<ProductDto[]>;
}
