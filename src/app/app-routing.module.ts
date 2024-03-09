import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultProductsComponent } from './consult-products/consult-products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { FindAllProductComponent } from './find-all-product/find-all-product.component';

import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [

  {path:'create-product', component:CreateProductComponent},
  {path:'consult-product', component:ConsultProductsComponent},
  {path:'update-product', component:UpdateProductComponent},
  {path:'findALlProduct', component:FindAllProductComponent},
  {path : '**' , redirectTo : 'create-product' , pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
