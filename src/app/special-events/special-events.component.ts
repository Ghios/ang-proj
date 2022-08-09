import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { Ievents } from '../event.service';
import { StockService, todo } from '../stock.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss']
})
export class SpecialEventsComponent implements OnInit {
  events: Ievents[] = []
  specialEvents: any = []
  constructor(private _eventService: EventService, private _router: Router, private stock: StockService) {
    this.stock.getData()
    .subscribe(res => {
      this.data = res
      console.log(this.data)
    })
  }

  data: todo[] = []
  columnsToDisplay = ['id','userId','title', 'completed']
  //dataSource = this.events;

  ngOnInit(): void {
    this._eventService.getSpecialEvents()
    .subscribe({
      next: res => this.specialEvents = res,
      error: err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._router.navigate(['/login'])
          }
        }
      }
    })

/*
    this._eventService.getSpecialEvents()
    .subscribe(data => {
      this.events = data
      console.log(this.events)
    })
*/

  }




}
