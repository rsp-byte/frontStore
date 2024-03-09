import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductoRequestDTO } from '../model/rquestProduct';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit{

  product: any
  formulario : FormGroup

  constructor(public productService: ProductServiceService, private formBuilder: FormBuilder){
    this.formulario = new FormGroup({
      name : new FormControl('', [ Validators.required, ]),
      description : new FormControl('', [ Validators.required, ]),
      price  : new FormControl('', [ Validators.required]),
      existence  : new FormControl('', [ Validators.required]),
   });
  }

  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  saveProduct(){
    const p : ProductoRequestDTO = {
      name : this.formulario.get("name")?.value,
      description: this.formulario.get("description")?.value,
      price:Number(this.formulario.get("price")?.value),
      existence:this.formulario.get("existence")?.value
    }
    this.productService.saveProduct(p).subscribe();
    this.formulario.reset();
   }

   cancelar(){
    this.formulario.reset();
   }

}
