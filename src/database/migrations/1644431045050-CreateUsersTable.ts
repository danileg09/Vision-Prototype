import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1644431045050 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Users",
                columns: [
                    {
                        name: 'user_id',
                        type: 'serial',
                        isPrimary: true
                    },
                    {
                        name: 'user_name',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'user_email',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'user_password',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Users")
    }


}
