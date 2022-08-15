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
  specialEvents: Ievents[] = []

  constructor(
    private _eventService: EventService,
    private _router: Router,
    private stock: StockService
  ) {
    // get data for table
    this.stock.getData()
    .subscribe(res => {
      this.data = res
      console.log(this.data)
    })
  }

  
  data: todo[] = []
  columnsToDisplay = ['id','userId','title', 'completed']

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
  }
}
