import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../categories/category.entity";
import { Brand } from "../brands/brand.entity";

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({length: 255, nullable: false})
  name: string;

  @Column('text', {nullable: true})
  description: string;

  @Column({type: 'decimal', precision: 10, scale: 2, nullable: false})
  price: number;

  @Column('boolean', {nullable: false, default: true})
  active: boolean;

  @ManyToOne(() => Category, {eager: false, nullable: false})
  category: Category;

  @ManyToOne(() => Brand, {eager: false, nullable: true})
  brand: Brand;
}

