import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  constructor(private http: HttpClient) {
    http.get('http://localhost:3000/pensamentos').
  }
}
