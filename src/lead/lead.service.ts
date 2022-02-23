import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { Customer } from 'src/customer/customer.entity';
import { Repository } from 'typeorm';
import { Lead } from './lead.entity';

@Injectable()
export class LeadService {
  constructor(
    @InjectRepository(Lead)
    private readonly leadRepo: Repository<Lead>,
  ) {}

  createLead = async (body): Promise<any> => {
    const { customerId, ...rest } = body;
    return await this.leadRepo.save({
      ...rest,
      customer: { id: customerId as Customer },
    });
  };

  async getByCustomerId(customerId): Promise<any> {
    return await this.leadRepo.find({ customer: { id: customerId } });
  }

  deleteLead = async (id): Promise<any> => {
    return await this.leadRepo.softDelete(id);
  };
}