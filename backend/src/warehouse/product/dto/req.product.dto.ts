import { IsNotEmpty } from 'class-validator';

export class ReqProductDto {
  @IsNotEmpty()
  descricao: string;

  @IsNotEmpty()
  marca: string;

  observacao: string;
}
