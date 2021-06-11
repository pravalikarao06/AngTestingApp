import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Product } from './models/product.model';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import { ProductDetailsComponent } from './product-details/product-details.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //inject httpclient service object
  constructor(private hc:HttpClient) { }

  //after json
  getMobilesData():Observable<Product[]>{
    //http get
    return this.hc.get<Product[]>("assets/jsonconverted.json")
  }







 //before json
 /* private mobiles:Product[]=[

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
    ];

    getMobilesData():Product[]{
      return this.mobiles;
    }*/

}
