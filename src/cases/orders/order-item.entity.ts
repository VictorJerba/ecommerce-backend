import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {Order} from './order.entity';
import { Product } from "../products/product.entity";


@Entity('order-item')
export class OrderItem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Order)
    order: Order;

    @ManyToOne(() => Product, {eager: true, nullable: false})
    product: Product;

    quantity: number;
    
    @Column ({type: 'decimal', precision: 10, scale: 2, scale:2, nullable: true})
    value: number;
 
}