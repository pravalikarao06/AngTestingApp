import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FakedataService } from '../fakedata.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  userdb:any;
  //inject fakedata service obj
  constructor(private fsObj:FakedataService , private routers:Router) { }

  ngOnInit(): void {
    this.fsObj.getUserdb().subscribe(
      userdata=>{
        this.userdb=userdata;
      },
      err=>{
        console.log("err is",err)
      }
    )
    
  }


  onSelectMyId(mid){
    this.routers.navigateByUrl('users/'+mid)
  }



}
