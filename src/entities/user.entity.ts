import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

export enum AccountType {
    USER = 'User',
    ADMIN = 'Admin',
}

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ length: 50 })
    firstName!: string;

    @Column({ length: 50 })
    lastName!: string;

    @Column({ unique: true, length: 100 })
    email!: string;

    @Column({ length: 15 })
    phoneNumber!: string;

    @Column({
        type: 'enum',
        enum: AccountType,
        default: AccountType.USER,
    })
    accountType!: AccountType;

    @Column()
    password!: string;

    @Column({ default: false })
    verified!: boolean;

    @Column({ type: 'date' })
    dob!: string;

    @CreateDateColumn()
    createdOn!: Date;

    @Column({ type: 'timestamp', nullable: true })
    deletedOn!: Date | null;

    @Column({ type: 'timestamp', nullable: true })
    lockTime!: Date | null;

    @Column({ type: 'timestamp', nullable: true })
    lastLogin!: Date | null;
}
