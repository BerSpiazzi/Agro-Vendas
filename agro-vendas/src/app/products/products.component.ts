import {Component} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule, CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatInputModule,
    MatIconModule,
    CurrencyPipe,
    CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  products = [
    {name: 'Semente de Trigo', price: 30.99, image:'assets/semente-trigo.png'},
    {name: 'Semente de Nabo', price: 55.50, image:'assets/semente-nabo.jpg'},
    {name: 'Semente de Soja', price: 45.80, image:'assets/semente-soja.png'},
    {name: 'Semente de Milho', price: 23.50, image:'assets/semente-milho.jpg'},
    {name: 'Muda de Alface', price: 0.25, image:'assets/muda-alface.jpg'}
  ];
}
