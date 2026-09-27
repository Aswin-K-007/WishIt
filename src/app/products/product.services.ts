import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { Product } from './product.component';
import { environment } from '../../enviromnet/enviromnet';



@Injectable({
  providedIn: 'root'
})

export class ProductService {
private baseUrl = environment.api.userProducts;
private imageBaseUrl = environment.api.productImages;

  constructor(private http: HttpClient) {}

  loadProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.baseUrl}/view_all_products`
    );
  }

  getImageUrl(imageName: string): string {
    return `${this.imageBaseUrl}${imageName}`;
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(
      `${this.baseUrl}/product/${id}`
    );
  }

}

