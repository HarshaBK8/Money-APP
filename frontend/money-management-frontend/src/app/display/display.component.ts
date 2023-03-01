import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Details } from '../details.model';
import { RoutesService } from '../routes.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  constructor(private route:ActivatedRoute,private routeService:RoutesService){}
  type:string=this.route.snapshot.params["type"];

  details:Details[];
  ngOnInit(){
    this.getDetails();
  }
  ngOnChanges(){
    this.getDetails();
  }

  getDetails(){
    console.log(this.type);
    this.routeService.getDetails(this.type).subscribe(data=>{
      this.details=data;
    })
  }
  deleteDetails(id:number){
    this.routeService.deleteDetails(this.type,id).subscribe();
    this.ngOnChanges()
    this.routeService.getDetails(this.type).subscribe();
  }
}
