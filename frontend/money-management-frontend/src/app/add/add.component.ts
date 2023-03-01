import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Details } from '../details.model';
import { RoutesService } from '../routes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  detail:Details=new Details();
  constructor(private route:ActivatedRoute,private routeService:RoutesService,private location:Location){}
  ngOnInit(): void {
  }
  type:string=this.route.snapshot.params["type"];
  ngOnChanges(){
    this.routeService.getDetails(this.type).subscribe();
  }
  

  onSubmit(){
    this.routeService.saveDetails(this.type,this.detail).subscribe();
    this.location.back();
    // this.routeService.getDetails(this.type).subscribe();
  }
  goBack(){
    this.location.back();
  }
}
