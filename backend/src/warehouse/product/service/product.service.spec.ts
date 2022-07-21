import { Test, TestingModule } from '@nestjs/testing';

import { ProductRepository } from '../repository/product.repository';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let repository: ProductRepository;

  const mockProductRepository = () => ({
    create: jest.fn(),
    findAll: jest.fn()
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: ProductRepository,
          useFactory: mockProductRepository
        }
      ]
    }).compile();

    service = module.get<ProductService>(ProductService);
    repository = module.get<ProductRepository>(ProductRepository);
  });

  it('should be list all products', async () => {
    const createdProduct = {
      id: 'abe5d5a1-d9ae-4909-aaa7-7bd0f112ece4',
      descricao: 'descricao teste',
      marca: 'marca teste',
      observacao: 'observacao teste',
      dataCadastro: new Date()
    };

    jest
      .spyOn(repository, 'findAll')
      .mockImplementation(async () => [createdProduct]);

    expect(await service.findAll()).toEqual([createdProduct]);
  });
});
