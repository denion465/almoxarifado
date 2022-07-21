import { ProductDto } from '../dto/product.dto';
import { ReqProductDto } from '../dto/req.product.dto';

export interface IProductRepository {
  create(product: ReqProductDto): Promise<ProductDto>;
  findAll(): Promise<ProductDto[]>;
}
