import { Lead } from 'src/lead/lead.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  customerId: string;

  @OneToOne((type) => Lead, (lead) => lead.customer, { onDelete: 'CASCADE' })
  lead: Lead;

  @DeleteDateColumn()
  deletedAt: Date;
}
