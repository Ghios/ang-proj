import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface todo {
  userid: number,
  id: number,
  title: string,
  completed: string
}

@Injectable({
  providedIn: 'root'
})
export class StockService {

  url = "https://jsonplaceholder.typicode.com/todos"

  constructor(private _http: HttpClient) { }

  getData(): Observable<todo[]> {
    return this._http.get<todo[]>(this.url)
  }

}
