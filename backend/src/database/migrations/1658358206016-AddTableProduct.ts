import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTableProduct1658358206016 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        create schema if not exists almoxarifado;

        create table if not exists almoxarifado.product(
          id uuid not null primary key,
          descricao text not null,
          marca character varying(100) not null,
          observacao varchar,
          data_cadastro timestamp not null default now()
        );
      `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        drop table if exists almoxarifado.product;
        drop schema if exists almoxarifado;
      `
    );
  }
}
