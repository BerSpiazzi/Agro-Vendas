import {Component, OnInit} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule, CurrencyPipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Pedido} from "../models/pedido";
import {Produto} from "../models/produto";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatInputModule,
    MatIconModule,
    CurrencyPipe,
    CommonModule,
    FormsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  selectedProduct: any;
  searchTerm: string = '';
  nomePedido: string = '';
  quantities: { [productId: string]: number } = {};
  pedidos: Pedido[] = [];

  selectedItems: { product: any, quantity: number }[] = [];

  products: Produto[] = [];

  ngOnInit(): void {
    this.loadProductsFromSessionStorage();
  }

  private loadProductsFromSessionStorage(): void {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const storedItems = sessionStorage.getItem('products');

      if (storedItems) {
        this.products = JSON.parse(storedItems);
      }
    }
  }

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

  incrementQuantity(productId: number): void {
    this.quantities[productId] = (this.quantities[productId] || 0) + 1;
  }

  decrementQuantity(productId: number): void {
    if (this.quantities[productId] && this.quantities[productId] > 0) {
      this.quantities[productId] -= 1;
    }
  }

  addToSelectedItems(): void {

    if (this.selectedProduct && this.quantities[this.selectedProduct.id] > 0 && this.quantities[this.selectedProduct.id] > 0) {
      const existingItem = this.selectedItems.find(item => item.product.id === this.selectedProduct.id);

      if (existingItem) {
        existingItem.quantity += this.quantities[this.selectedProduct.id];
      } else {
        const selectedQuantity = this.quantities[this.selectedProduct.id];
        const selectedItem = {product: this.selectedProduct, quantity: selectedQuantity};
        this.selectedItems.push(selectedItem);
      }

      this.selectedProduct = null;
      this.quantities = {};
    }
  }

  removeFromSelectedItems(index: number): void {
    this.selectedItems.splice(index, 1);
  }

  finishPurchase(): void {

    if (this.nomePedido.trim() === '') {
      alert('Por favor, insira um nome para o pedido antes de finalizar a compra.');
      return;
    }

    if (this.selectedItems.length > 0) {

      const pedido: Pedido = {
        id: new Date().getTime(),
        descricao: this.nomePedido,
        produtos: this.selectedItems.map(item => ({
          id: item.product.id,
          name: item.product.name,
          quantidade: item.quantity
        })),
      };
      this.pedidos.push(pedido);
      const pedidosJson = JSON.stringify(this.pedidos);

      sessionStorage.setItem('pedido', pedidosJson);
      this.selectedItems = [];

      this.selectedItems = [];
      this.nomePedido = '';
      this.selectedProduct = null;
      this.quantities = {};
    }
  }
}
