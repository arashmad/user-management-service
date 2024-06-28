import { Entity, Column, Generated, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class User {
    @Column()
    @Generated('increment')
    id!: number;

    @Column({ length: 36, nullable: false, unique: true, primary: true })
    uid!: string;

    @Column({ length: 36, nullable: false, unique: true })
    email!: string;

    @Column({ length: 36, nullable: false })
    password!: string;

    @Column({ length: 200, nullable: true })
    firstName!: string;

    @Column({ length: 200, nullable: true })
    lastName!: string;

    @CreateDateColumn()
    createdDate!: Date;

    @UpdateDateColumn()
    updatedDate!: Date;

    @DeleteDateColumn()
    deletedDate!: Date;
}
