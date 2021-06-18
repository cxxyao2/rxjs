import { Component, OnInit,OnDestroy } from '@angular/core';
import { DebounceService } from './debounce.service';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(){}

}
