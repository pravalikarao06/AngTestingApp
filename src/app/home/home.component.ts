import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  n:number=100;
  num:number=5;
  today=new Date();

  constructor(private tsObj:TestService) { }

  ngOnInit(): void {
    this.tsObj.setData(this.n)
  }

}
