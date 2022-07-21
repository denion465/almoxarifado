import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

@Exclude()
export class ProductDto {
  id: string;

  @Expose()
  @IsNotEmpty()
  descricao: string;

  @Expose()
  @IsNotEmpty()
  marca: string;

  @Expose()
  observacao: string;

  @Expose()
  dataCadastro: Date;
}
