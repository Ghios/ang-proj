import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Ievents {
  id: string,
  name: string,
  description: string,
  date: string
}

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = "http://localhost:3000/api/events"
  private _specialEventsUrl = "http://localhost:3000/api/special"

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Ievents[]> {
    return this.http.get<Ievents[]>(this._eventsUrl)
  }

  getSpecialEvents(): Observable<Ievents[]> {
    return this.http.get<Ievents[]>(this._specialEventsUrl)
  }

}
