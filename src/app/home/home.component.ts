import { Component, OnInit , OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  private firstObsSubscription: Subscription; 
  constructor() { }


}