import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { 
    console.log("login component is executed")
  }

  ngOnInit(): void {
  }



  onLogin(ref){
    let userLoginObj=ref.value;

    //if username and pw are admin then navigate to admin
    //if(userLoginObj.username!='admin' || userLoginObj.password!='admin'){
      //alert("Invalid credentials")
   // }
   // else{
      //to save username to localstorage
      //localStorage.setItem("username","admin")
      //navigate to admin component
     // this.router.navigateByUrl("/admin")

     console.log(userLoginObj)
    }



}
