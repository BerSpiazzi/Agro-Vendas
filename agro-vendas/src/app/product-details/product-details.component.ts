import {Component, OnInit} from '@angular/core';
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
export class ProductDetailsComponent implements OnInit {

  selectedProduct: Produto | undefined;
  searchTerm: string = '';
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

  removeFromSelectedItems(index: number): void {
    this.selectedItems.splice(index, 1);
  }
}
