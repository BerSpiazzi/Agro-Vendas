import {Component} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatInputModule,
    MatIconModule,
    CurrencyPipe
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  products = [
    {name: 'Produto 1', price: 19.99},
    {name: 'Produto 2', price: 29.99},
    {name: 'Produto 3', price: 39.99},
    {name: 'Produto 4', price: 49.99},
    {name: 'Produto 5', price: 59.99},
    {name: 'Produto 6', price: 69.99},
    {name: 'Produto 7', price: 79.99},
    {name: 'Produto 8', price: 89.99},
    {name: 'Produto 9', price: 99.99}
  ];
}
