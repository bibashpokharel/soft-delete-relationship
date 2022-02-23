import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly service: CustomerService) {}

  @Post()
  async createCustomer(@Body() body): Promise<any> {
    return await this.service.createCustomer(body);
  }

  @Get(':customerId')
  async getByCustomerId(@Param('customerId') customerId: string): Promise<any> {
    return await this.service.getByCustomerId(customerId);
  }

  @Delete()
  async deleteCustomer(@Param('id') id: string): Promise<any> {
    return await this.service.deleteCustomer(id);
  }
}
