import { Table, Column, Model, ForeignKey, PrimaryKey } from 'sequelize-typescript';
import { User } from './User';

@Table({ timestamps: true, tableName: "items" })
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

    @ForeignKey(() => User)
    @Column
    user_id!: number;
}
