import { Table, Column, Model, HasOne } from 'sequelize-typescript';
import { User } from './User';

@Table({ timestamps: true })
export class Item extends Model {
    @Column
    description!: string;

    @Column
    price!: number;

    @Column
    rarity!: string;

    @Column
    graphics!: number;

    @Column
    name!: string;

    @HasOne(() => User)
    user!: User;
}
