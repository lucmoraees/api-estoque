import {
  ICreateProduto,
  IProdutosRepository,
  IQueryFilters,
  IUpdateProduto,
} from "../../@types";
import Produto from "../../database/entities/Produto";
import { fakeProdutos } from '../../mochs/values/produtos';

class FakeProdutosRepository implements IProdutosRepository {
  private produtos: Produto[] = [];

  constructor() {
    this.produtos = fakeProdutos;
  }

  private gerarCodigo(): number {
    if (!this.produtos.length) return 1;

    const ultimoProduto = this.produtos[this.produtos.length - 1];
      
    return ultimoProduto.codigo + 1;
  }

  async findByDescricao(descricao: string): Promise<Produto | undefined> {
    const indexProduto = this.produtos.findIndex((p) => p.descricao === descricao);

    const produto = this.produtos[indexProduto];

    return produto;
  }

  async findByCodigo(codigo: number): Promise<Produto | undefined> {
    const indexProduto = this.produtos.findIndex((p) => p.codigo === codigo);

    const produto = this.produtos[indexProduto];

    return produto;
  }

  async createProduto(paramsCreate: ICreateProduto): Promise<Produto> {
    const novoProduto = new Produto()

    novoProduto.codigo = this.gerarCodigo(),
    novoProduto.descricao = paramsCreate.descricao;
    novoProduto.preco = paramsCreate.preco;
    novoProduto.tipoEmbalagem = paramsCreate.tipoEmbalagem;
    novoProduto.quantidadeEmbalagem = paramsCreate.quantidadeEmbalagem;
    novoProduto.peso = paramsCreate.peso;
    
    this.produtos.push(novoProduto);

    return novoProduto;
  }
  
  async findWithFilters(filtros: IQueryFilters): Promise<{ data: Produto[], count: number }> {
    const data = this.produtos.filter((p, i) => i < filtros.take);
    const count = this.produtos.length

    return { data, count };
  }

  async updateProduto({ codigo, alteracoes }: IUpdateProduto): Promise<void> {
    this.produtos = this.produtos.map((p) => {
      if (p.codigo !== codigo) return p

      return { ...p, ...alteracoes } as Produto;
    });

    return;
  }

  async deleteProduto(codigo: number): Promise<void> {
    this.produtos = this.produtos.filter((p) => p.codigo !== codigo);

    return;
  }
}

export default FakeProdutosRepository;
