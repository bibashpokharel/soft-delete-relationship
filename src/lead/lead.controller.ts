import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { LeadService } from './lead.service';

@Controller('lead')
export class LeadController {
  constructor(private service: LeadService) {}

  @Post()
  async createLead(@Body() body): Promise<any> {
    return this.service.createLead(body);
  }

  @Get(':customerId')
  async getLeadByCustomerId(
    @Param('customerId') customerId: string,
  ): Promise<any> {
    return this.service.getByCustomerId(customerId);
  }

  @Delete(':id')
  async deleteLead(@Param('id') id: string): Promise<any> {
    return this.service.deleteOneLead(id);
  }
}
