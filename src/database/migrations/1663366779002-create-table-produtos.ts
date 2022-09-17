import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createTableProdutos1663366779002 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'produtos',
      columns: [
        {
          name: 'codigo',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'descricao',
          type: 'varchar',
        },
        {
          name: 'preco',
          type: 'numeric',
          precision: 10,
          scale: 2,
        },
        {
          name: 'tipo_embalagem',
          type: 'int',
        },
        {
          name: 'quantidade_embalagem',
          type: 'int',
        },
        {
          name: 'peso',
          type: 'int',
        },
        {
          name: 'created_at',
          type: 'datetime',
          default: 'now()',
        },
        {
          name: 'updated_at',
          type: 'datetime',
          default: 'now()',
        },
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('produtos');
  }
}
