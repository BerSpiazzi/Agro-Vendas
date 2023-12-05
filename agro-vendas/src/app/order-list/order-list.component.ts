import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {NgForOf} from "@angular/common";
import {Produto} from "../models/produto";
import {Pedido} from "../models/pedido";

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    NgForOf
  ],
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  searchTerm: string = '';
  pedidos: Pedido[] = [];

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const storedItems = sessionStorage.getItem('pedido');

      if (storedItems) {
        this.pedidos = JSON.parse(storedItems) as Pedido[];
      }
    }
  }

  get filteredProducts() {
    return this.pedidos.filter(pedido =>
      pedido.descricao.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  deliverOrder(order: any): void {
    const index = this.pedidos.indexOf(order);
    if (index !== -1) {
      this.pedidos.splice(index, 1);
      if (typeof window !== 'undefined' && window.sessionStorage) {
        sessionStorage.setItem('selectedItems', JSON.stringify(this.pedidos));
      }
    }
  }
}
