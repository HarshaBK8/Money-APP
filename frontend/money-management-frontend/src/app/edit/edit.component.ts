import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Details } from '../details.model';
import { RoutesService } from '../routes.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(private route:ActivatedRoute,private routeService:RoutesService,private location:Location){ }

  type:string=this.route.snapshot.params["type"];
  id:number=this.route.snapshot.params["id"];
  detail:Details=new Details();

  ngOnInit(){
    this.routeService.getSingleDetail(this.type,this.id).subscribe(data=>{
      this.detail=data;
    })
  }
  
  onSubmit(){
    this.routeService.editDetails(this.type,this.id,this.detail).subscribe();
    this.location.back();
  }
}
