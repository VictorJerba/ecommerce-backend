import { Column, Entity } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm/browser";

@Entity('category')
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 60, nullable: false})
    name: string;
    
}