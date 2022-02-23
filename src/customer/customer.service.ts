import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LeadService } from 'src/lead/lead.service';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepo: Repository<Customer>,
    private readonly leadService: LeadService,
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
    // since there is not foreign key constraint, we have to manually go and soft delete the leads for the particular customer Id

    // we need to make sure that this operation is atomic
    await this.leadService.deleteLeadByCustomerId(id);

    // deleting customer now
    return await this.customerRepo.softDelete(id);
  }
}
