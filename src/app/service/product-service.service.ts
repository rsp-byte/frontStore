import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductoRequestDTO } from '../model/rquestProduct';
import { url_base } from '../constants/constants';



@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {


  constructor(private http: HttpClient) { }

  getProduct(id: string){
    return this.http.get(url_base+'producto/'+id);
  }

  saveProduct(product:ProductoRequestDTO){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(product);
    return this.http.post(url_base+"producto",body,{'headers':headers});
  } 
  
  updateProduct(id: string, product:ProductoRequestDTO){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(product);
    return this.http.put(url_base+"producto/"+id,body,{'headers':headers});
  }

  findAllProduct(){
    return this.http.get(url_base+'productos');
  }

  deleteProduct(id: number){
    return this.http.delete(url_base+'producto/'+id);
  }

  saveComment(product: any, comentario: string){
    const headers = { 'content-type': 'application/json'}
    const c = {
      idProduct: product.id,
      comment: comentario
    }

    return this.http.post<any>(url_base+ 'comentarios', c, {'headers':headers});
  }
  
}
