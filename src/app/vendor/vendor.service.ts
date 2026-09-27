import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviromnet/enviromnet';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private baseUrl = environment.api.vendorProducts;

  constructor(private http: HttpClient) {}

  addProduct(formData: FormData): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/upload`,
      formData
    );
  }
}