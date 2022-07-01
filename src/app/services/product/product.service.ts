import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly BASE_URL = 'https://628b2f157886bbbb37b20caa.mockapi.io/products'

  constructor(private http: HttpClient) { }

  getProducts(searchString?: string, category?:string):Observable<Product[]> {
    let url = this.BASE_URL+'?';
    if(searchString){
      url += '&name=' + searchString;
    }
    if (category) {
      url +=  '&category=' + category;
    }
    
    return this.http.get<Product[]>(url);

  }
  getProductsById(id: string):Observable<Product> {
    const url = this.BASE_URL + '/' + id
    return this.http.get<Product>(url)
  }


}
