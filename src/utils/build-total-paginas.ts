const buildTotalPaginas = (count: number, quantidade: number): number => {
  const totalPaginas = Math.ceil(count / Number(quantidade));

  return totalPaginas;
}

export default buildTotalPaginas;
