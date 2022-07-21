import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  descricao: string;

  @Column()
  marca: string;

  @Column()
  observacao: string;

  @CreateDateColumn({ name: 'data_cadastro' })
  dataCadastro: Date;
}
