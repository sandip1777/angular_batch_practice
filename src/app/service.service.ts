import { Injectable } from '@angular/core';
import { Product } from './model/model';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  private products: Product[] = [];

  getProducts() {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }
}
