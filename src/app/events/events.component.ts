import { Component, OnInit } from '@angular/core';
import { EventService, Ievents } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events: Ievents[] = []
  constructor(private _eventService: EventService) { }

  ngOnInit(): void {
    this._eventService.getSpecialEvents()
    .subscribe({
      next: res => this.events = res,
      error: err => console.log(err)
    })
  }

}
