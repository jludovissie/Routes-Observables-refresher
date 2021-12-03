import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Leader } from '../shared/leader.model';
import { LeardershipService } from '../shared/leadership.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  management: Leader[] =[]
  name: string = '';
  title: string = '';

  constructor(private router: Router,
              private route: ActivatedRoute,
              public leaderService: LeardershipService) { }

  ngOnInit() {
    this.getLeaders();
  }
  onAbout(){
    this.router.navigate(['about']),{relativeTo: this.route}
  }
 getLeaders(){
   this.leaderService.getHeroes().subscribe(management => this.management = management)
 }
 clear(){
  this.management= []
 }
 add(){
   this.name 

 }
}