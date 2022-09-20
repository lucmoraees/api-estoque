import 'dotenv/config';
import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const pathEntities = `${__dirname}/entities/*.ts`;

const pathMigrations = `${__dirname}/migrations/*.ts`;

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: String(process.env.DB_USERNAME),
  password: String(process.env.DB_PASSWORD),
  database: 'estoque',
  entities: [pathEntities],
  migrations: [pathMigrations],
  namingStrategy: new SnakeNamingStrategy(),
});

dataSource.initialize()
  .then(() => console.log('🚀 Banco de dados online'))
  .catch((err) => console.log('Erro ao estabelecer a conexão com o banco de dados!', err));

export default dataSource;
