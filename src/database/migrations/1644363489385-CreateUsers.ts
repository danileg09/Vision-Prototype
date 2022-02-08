import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1644363489385 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Users",
                columns: [
                    {
                        name: "user_id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_name",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "user_email",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "user_password",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Users")
    }


}
