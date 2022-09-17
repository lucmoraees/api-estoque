import { IQueryOperacao } from "../@types";

const buildValudByOperacao = (
  value: string | number | undefined,
  operacao: IQueryOperacao = 'contendo',
) => {
  if (!value) {
    return '%%%';
  }

  switch (operacao) {
    case 'contendo': return `%${value}%`;
    case 'iniciando': return `%${value}`;
    case 'igual': return `${value}`;
    default: return `%${value}%`;
  }
}

export default buildValudByOperacao;
