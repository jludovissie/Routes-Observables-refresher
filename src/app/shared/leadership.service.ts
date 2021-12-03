import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Leader } from "./leader.model";

@Injectable({
  providedIn:"root"
})

export class LeardershipService{
  leaders: Leader[] =[
    {name: 'Joe' , title: 'CEO'},
    {name: 'John', title: 'CFO'},
    {name: 'Mardie', title: 'President'},
    {name: 'Lindsey', title: 'Executive Assistant'}
  ]
    constructor(){}
  getHeroes(): Observable<Leader[]>{
    const management = of(this.leaders)
    return management
  }   
}