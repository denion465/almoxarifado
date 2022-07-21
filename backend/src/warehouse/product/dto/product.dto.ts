import { Exclude } from 'class-transformer';

@Exclude()
export class ProductDto {
  id: string;

  descricao: string;

  marca: string;

  observacao: string;

  dataCadastro: Date;
}
