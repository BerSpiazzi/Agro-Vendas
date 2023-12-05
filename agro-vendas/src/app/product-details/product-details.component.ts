import {Component} from '@angular/core';
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {Produto} from "../models/produto";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CurrencyPipe,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    NgForOf,
    NgIf,
  ],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  selectedProduct: Produto | undefined;
  searchTerm: string = '';
  selectedItems: { product: any, quantity: number }[] = [];

  products = [
    {
      id: '1', name: 'Semente de Trigo', descricao: 'Ciclo: Precoce\n' +
        '\n' +
        'Dias da emergência ao espigamento: 75\n' +
        '\n' +
        'Dias da emergência à maturação: 120\n' +
        '\n' +
        'Altura de planta: Média\n' +
        '\n' +
        'Perfilhamento: Médio\n' +
        '\n' +
        'Classificação: Pão/Melhorador\n' +
        '\n' +
        'Força de glúten (médio): 305.10-4  Joule\n' +
        '\n' +
        'Estabilidade (médio): 19 minutos\n' +
        '\n' +
        'Cor de grão: Vermelho \n' +
        '\n' +
        'Textura: Dura\n' +
        '\n' +
        'Cor de farinha: Clara\n' +
        '\n' +
        ' \n' +
        '\n' +
        'Resistência:\n' +
        '\n' +
        'Acamamento: Moderadamente Resistente\n' +
        '\n' +
        'Debulha: Moderadamente Resistente\n' +
        '\n' +
        'Ferrugem da folha: Moderadamente Resistente\n' +
        '\n' +
        'Giberela: Moderadamente Suscetível\n' +
        '\n' +
        'Oídio: Moderadamente Resistente\n' +
        '\n' +
        'Manchas foliares: Moderadamente Resistente / Moderadamente Suscetível\n' +
        '\n' +
        'Mosaico do trigo: Moderadamente Suscetível\n' +
        '\n' +
        'Brusone: Moderadamente Resistente / Moderadamente Suscetível\n' +
        '\n' +
        'Germinação na espiga: Moderadamente Resistente', price: 30.99, image: 'assets/semente-trigo.png'
    },
    {
      id: '2',
      name: 'Semente de Nabo',
      descricao: 'Nome Cientifico: Raphanus sativus L.\n' +
        'Cultivar: Comum\n' +
        'Forma de Crescimento: Herbácea e Rasteira\n' +
        'Altura: 0,5 a 1,5 metros\n' +
        'Produção da Matéria Seca: 2 a 5 ton/hectare\n' +
        'Caracteristica: Sem ramificações / Pelos ásperos\n' +
        'Espaçamento: 0,25 metros - entrelinhas\n' +
        'Tolerância à Seca e Frio: Média/Alta\n' +
        'Ciclo Vegetativo: Anual (60 a 90 dias até o florescimento)\n' +
        'Nitrogênio: Até 130Kg/Hectare\n' +
        'Precipitação Anual:     Acima de 600 mm\n' +
        'Utilização: Adubação verde\n' +
        'Fertilidade do Solo: Baixa/Média\n' +
        'Profundidade do Plantio: 2 a 3 cm\n' +
        'Plantio: 10 kg/hectare\n' +
        '\n' +
        'O nabo forrageiro, conhecido cientificamente por Raphanus sativus L., é uma planta da família das Crucíferas. É muito utilizada na adubação verde, pois suas raízes descompactam o solo, permitindo um preparo biológico do mesmo na rotação de culturas e na alimentação animal.\n' +
        '\n' +
        'Apresenta elevada capacidade de reciclagem de nutrientes, principalmente nitrogênio e fósforo, tornando-se uma espécie importante na rotação de culturas como algodão, feijão, milho e soja.',
      price: 55.50,
      image: 'assets/semente-nabo.jpg'
    },
    {
      id: '3', name: 'Semente de Soja', descricao: 'Hábito Crescimento: Indeterminado\n' +
        'Grupo de maturação: 5.6\n' +
        'Acamamento: R\n' +
        'Altura de Planta (cm): 104\n' +
        'Inserção de vagem (cm): 23\n' +
        'Cor da flor: Roxa\n' +
        'Pubescência: Cinza\n' +
        'Hilo: Marrom clara\n' +
        '\n' +
        ' \n' +
        '\n' +
        'PMS 5,5 mm: 117 g\n' +
        'PMS 6,5 mm: 175 g\n' +
        'Ótimo potencial produtivo com precocidade\n' +
        'Alta sanidade\n' +
        'Tolerância ao acamamento\n' +
        '\n' +
        ' \n' +
        '\n' +
        'Resistência:\n' +
        'Cancro da haste: R\n' +
        'Pústula bacteriana: S\n' +
        'Mancha-olho-de-rã: MR\n' +
        'Cisto: S\n' +
        'Galhas: S\n' +
        'Lesões: S', price: 45.80, image: 'assets/semente-soja.png'
    },
    {
      id: '4',
      name: 'Semente de Milho',
      descricao: 'MILHO HÍBRIDO BM904 - EXCELENTE PARA PRODUÇÃO DE MASSA PARA PAMONHA E SILAGEM\n' +
        '\n' +
        '>Excelente produção de massa e bom empalhamento\n' +
        '>Sabor excelente, com baixa presença de resíduos da pele do grão e boa textura de massa\n' +
        '>Palhas grandes, claras e macias\n' +
        '>Grãos de cor creme, boa aparência e espigas com facilidade de retirada de cabelo\n' +
        '>Espigas longas e com maior tolerância ao armazenamento pós colheita\n' +
        '>Colheita de espiga para milho verde entre 70 e 90 dias, conforme local e época de plantio\n' +
        '>Adaptado a todas as regiões do Brasil\n' +
        '>Excelente rendimento de silagem, com alta digestibilidade e palatabilidade.',
      price: 23.50,
      image: 'assets/semente-milho.jpg'
    },
    {
      id: '5',
      name: 'Muda de Alface',
      descricao: 'Muda de alface lisa, venda por bandeja ou unid.\n' +
        '\n' +
        'Tenha sua horta orgânica em casa, alface crespa de excelente qualidade, livre de agrotóxicos.',
      price: 0.25,
      image: 'assets/muda-alface.jpg'
    }
  ];

  get filteredProducts() {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectProduct(product: any): void {
    this.selectedProduct = product;
  }

  isProductSelected(product: any): boolean {
    return this.selectedProduct === product;
  }

  removeFromSelectedItems(index: number): void {
    this.selectedItems.splice(index, 1);
  }
}
