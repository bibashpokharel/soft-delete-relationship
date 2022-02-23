import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepo: Repository<Customer>,
  ) {}

  async createCustomer(body): Promise<any> {
    return await this.customerRepo.save(body);
  }

  async getByCustomerId(customerId: string): Promise<any> {
    return await this.customerRepo.find({
      where: { id: customerId },
      relations: ['lead'],
    });
  }

  async deleteCustomer(id): Promise<any> {
    return await this.customerRepo.softDelete(id);
  }
}
