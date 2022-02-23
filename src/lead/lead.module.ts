import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeadController } from './lead.controller';
import { Lead } from './lead.entity';
import { LeadService } from './lead.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lead])],
  controllers: [LeadController],
  providers: [LeadService],
})
export class LeadModule {}
