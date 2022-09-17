import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('produtos')
class Produto {
  @PrimaryGeneratedColumn('increment')
    codigo: number;

  @Column()
    descricao: string;

  @Column()
    preco: number;

  @Column()
    tipoEmbalagem: number;

  @Column()
    quantidadeEmbalagem: number;

  @Column()
    peso: number;

  @UpdateDateColumn()
    updatedAt: Date;

  @CreateDateColumn()
    createdAt: Date;
}

export default Produto;
