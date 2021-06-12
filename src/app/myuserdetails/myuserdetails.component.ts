import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakedataService } from '../fakedata.service';

@Component({
  selector: 'app-myuserdetails',
  templateUrl: './myuserdetails.component.html',
  styleUrls: ['./myuserdetails.component.css']
})
export class MyuserdetailsComponent implements OnInit {

  constructor(private abr:ActivatedRoute,private fsa:FakedataService) { }

  userdb:any;
  ngOnInit(): void {
    let mid=this.abr.snapshot.params.mid;
    this.fsa.getme(mid).subscribe(
      me=>{
        this.userdb=me;
      },
      err=>{
        console.log("err is",err)
      }
    )

    
  }

}
