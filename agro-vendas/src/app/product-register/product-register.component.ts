import { Component } from '@angular/core';
import { Produto } from '../models/produto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-register.component.html',
  styleUrl: './product-register.component.scss',
})
export class ProductRegisterComponent {
  newProduct: Produto = { id: 0, name: '', descricao: '', price: 0, image: '' };
  products: Produto[] = [];

  addProduct(): void {
    this.products.push({ ...this.newProduct });
    this.saveProductsToSessionStorage();
    this.clearForm();
  }

  clearForm(): void {
    this.newProduct = { id: 0, name: '', descricao: '', price: 0, image: '' };
  }

  saveProductsToSessionStorage(): void {
    const productsJson = JSON.stringify(this.products);
    sessionStorage.setItem('products', productsJson);
  }

}
