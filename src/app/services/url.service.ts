import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private apiUrl = 'https://localhost:7264/api/Url';  // Replace with your API URL

  constructor(private http: HttpClient) { }

  addUrl(url: string): Observable<any> {
    const newUrl = { UrlLink: url };
    return this.http.post<any>(this.apiUrl, newUrl);
  }
  
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getInfo(id: string) {
    return this.http.get(this.apiUrl + `/${id}`)
  }
}
