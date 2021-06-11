import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit  {

  /*mobiles=[

    {
    productTitle:"Apple",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://youmatter.world/app/uploads/sites/2/2019/11/tech-planet.jpg"
    },
    {
    productTitle:"Samsung",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://apicms.thestar.com.my/uploads/images/2020/08/24/831125.jpg"
    },
    
    {
    productTitle:"One-plus",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://itconsultingindubai.files.wordpress.com/2016/03/choosing-a-technology-solution.jpg"
    },
    
    {
    productTitle:"Vivo",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://itconsultingindubai.files.wordpress.com/2016/03/choosing-a-technology-solution.jpg"
    },
    
    {
    productTitle:"Oppo",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://wallpaperaccess.com/full/4755970.jpg"
    },
    
    {
    productTitle:"Mi",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5577975.jpg"
    }
    ];*/



    mobiles:Product[]=[];

    //inject obj of DataService class
    constructor(private dsObj:DataService){

    }

    ngOnInit(){
      this.dsObj.getMobilesData().subscribe(
        data=>{
          this.mobiles=data;
        },
        err=>{
          console.log("err is",err)
        }
      )
    }

    /*ngOnInit(){
      //obj initialization logic
      this.mobiles=this.dsObj.getMobilesData();
    }*/



}
