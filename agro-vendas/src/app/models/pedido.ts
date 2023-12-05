import {Produto} from "./produto";

export interface Pedido {
  id: number,
  descricao: string,
  produtos: Produto[],
}
