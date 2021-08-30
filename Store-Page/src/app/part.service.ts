import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Part } from './part.model';
import { Type } from './type.model';

@Injectable({
  providedIn: 'root'
})
export class PartService {

  baseUrl = 'http://localhost:8081/store'

  constructor(private http: HttpClient) { }

  read(): Observable<Part[]> {
    return this.http.get<Part[]>(`${this.baseUrl}/parts`)
  }

  readQuery(q: string): Observable<Part[]> {
    return this.http.get<Part[]>(`${this.baseUrl}/parts?query=${q}`)
  }

  readByType(p: string): Observable<Part[]> {
    return this.http.get<Part[]>(`${this.baseUrl}/parts?type=${p}`)
  }

  readTypes(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/part-types`)
  }


  // typeRead(): Observable<Part[]> {
  //   return this.http.get<Part[]>(`${this.baseUrl}\?type=`)
  // }
}
