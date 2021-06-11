import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakedataService } from '../fakedata.service';
import { Post } from '../models/posts.model';
import { User } from '../models/users.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit,OnDestroy {


  mySubscription:Subscription;
  myPosts:Post[]=[];
  users:User;
  //inject Fakedata service object
  constructor(private fsObj:FakedataService) { }

  ngOnInit(): void {
    this.fsObj.getPosts().subscribe(
      postData=>{
        //assign posts
        this.myPosts=postData;
      },
      err=>{
        console.log("err in getting posts data",err)
      }
    )

    this.mySubscription= this.fsObj.getUsers().subscribe(
      postUser=>{
        this.users=postUser;
        console.log(this.users)
      },
      err=>{
        console.log("err is",err)
      }
    )
  }

  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }

}
