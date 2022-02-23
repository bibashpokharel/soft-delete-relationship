import { Customer } from 'src/customer/customer.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Lead {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToOne((type) => Customer, {
    cascade: true,
    createForeignKeyConstraints: false,
  })
  @JoinColumn()
  customer: Customer;

  @DeleteDateColumn()
  deletedAt: Date;
}
