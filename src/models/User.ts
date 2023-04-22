import { Table, Column, Model, HasMany } from 'sequelize-typescript';

@Table({ timestamps: true })
export class User extends Model {
    @Column
    id!: number;

    @Column
    public_key!: string;

    @Column
    private_key!: string;

    @Column
    money!: number;
}
