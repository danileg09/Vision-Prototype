import { Entity, Column, CreateDateColumn, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity("Users")
export class User {
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    admin: boolean;
 
    @Column()
    name: string;
 
    @Column()
    email: string;
 
    @Column()
    password: string;
 
    @CreateDateColumn()
    created_at: Date;

    // constructor() {
    //     // if(!this.id) {
    //     //     this.id = uuid();
    //     // }
    // }
}