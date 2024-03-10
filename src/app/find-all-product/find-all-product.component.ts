import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-find-all-product',
  templateUrl: './find-all-product.component.html',
  styleUrls: ['./find-all-product.component.scss']
})
export class FindAllProductComponent implements OnInit{
  
  comentario: string = '';
  products: any;

  constructor(public productService: ProductServiceService){

  }
  ngOnInit(): void {
    this.findAllProducts();
  }

  findAllProducts(){
  this.productService.findAllProduct().subscribe(data => {
      this.products = data;
    });
  }

  async deleteProduct(index: number) {
    console.log(index);
    await this.productService.deleteProduct(index).subscribe();
    this.findAllProducts()
  }

  saveComment(product: any){
    this.productService.saveComment(product, this.comentario).subscribe();
  }

}
