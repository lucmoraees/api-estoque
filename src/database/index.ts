import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const pathEntities = `${__dirname}/entities/*.ts`;

const pathMigrations = `${__dirname}/migrations/*.ts`;

const dataSource = new DataSource({
  name: 'default',
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'mtrix',
  entities: [pathEntities],
  migrations: [pathMigrations],
  namingStrategy: new SnakeNamingStrategy(),
});

dataSource.initialize()
  .then(() => console.log('🚀 Banco de dados online'))
  .catch((err) => console.log('Erro ao estabelecer a conexão com o banco de dados!', err));

export default dataSource;
