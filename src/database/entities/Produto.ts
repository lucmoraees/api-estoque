import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import FloatTransformer from '../transformers/FloatTransformer';

@Entity('produtos')
class Produto {
  @PrimaryGeneratedColumn('increment')
    codigo: number;

  @Column()
    descricao: string;

  @Column({ transformer: new FloatTransformer() })
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
