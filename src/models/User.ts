import { Table, Column, Model, HasMany, PrimaryKey } from 'sequelize-typescript';
import { Item } from './Item';

@Table({ timestamps: true, tableName: "users" })
export class User extends Model {
    @PrimaryKey
    @Column
    id!: number;

    @Column
    public_key!: string;

    @Column
    private_key!: string;

    @Column
    money!: number;

    @HasMany(() => Item)
    items!: Item[];
}
