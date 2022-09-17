/* eslint-disable class-methods-use-this */
class FloatTransformer {
  to(data: number): number {
    return data;
  }

  from(data: string): number {
    return parseFloat(data);
  }
}

export default FloatTransformer;
