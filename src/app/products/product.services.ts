import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { Product } from './product.component';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
private baseUrl = 'http://localhost:8080/wishit/products';
private imageBaseUrl = 'http://localhost:8080/images/';

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

