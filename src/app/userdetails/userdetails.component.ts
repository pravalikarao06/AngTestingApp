import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakedataService } from '../fakedata.service';
import { Post } from '../models/posts.model';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  postObj:Post;
  
  constructor(private ar:ActivatedRoute,private fs:FakedataService) { }

  ngOnInit(): void {
    let id=this.ar.snapshot.params.id;
    
    //get data of post with this current id
    this.fs.getPostById(id).subscribe(
      obj=>{
        this.postObj=obj;
      },
      err=>{
        console.log("err is",err)
      }
    )

    
  }

}
