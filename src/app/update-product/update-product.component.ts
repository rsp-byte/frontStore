import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductoResponseDTO } from '../model/responseProduct';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  product: any;
  formulario : FormGroup;


  constructor(public productService: ProductServiceService, private formBuilder: FormBuilder){
    this.formulario = new FormGroup({
      id : new FormControl('', [ Validators.required, ]),
      ida: new FormControl('', [ Validators.required, ]),
      name : new FormControl('', [ Validators.required, ]),
      description : new FormControl('', [ Validators.required, ]),
      price  : new FormControl('', [ Validators.required]),
      existence  : new FormControl('', [ Validators.required]),

   });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  findByIdProduct(){
    const id = this.formulario.get("id")?.value
    this.productService.getProduct(id).subscribe(data => {
      this.product = data;
    });
    //this.formulario.reset();
  }

  cancelar(){
    this.formulario.reset();
  }
  
  updateProduct(){
    const idProduct = this.formulario.get("ida")?.value;
    const p : ProductoResponseDTO = {
      id : this.formulario.get("ida")?.value,
      name:this.formulario.get("name")?.value,
      description: this.formulario.get("description")?.value,
      price:Number(this.formulario.get("price")?.value),
      existence:this.formulario.get("existence")?.value
    }
    this.productService.updateProduct(idProduct,p).subscribe();
    this.formulario.reset();
   }

}
