import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Product } from '../model/model';


@Component({
  selector: 'amol-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  name = '';
  description = '';
  price!: number;
products: any;

  constructor(private productService: ServiceService) {}

  addProduct() {
    if (this.name && this.description && this.price) {
      const newProduct: Product = {
        id: Date.now(),
        name: this.name,
        description: this.description,
        price: this.price,
      };

      this.productService.addProduct(newProduct);
      alert('Product added successfully!');
      this.clearForm();
    } else {
      alert('Please fill in all fields.');
    }
  }

  clearForm() {
    this.name = '';
    this.description = '';
    this.price = 0;
  }
  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
