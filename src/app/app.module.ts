import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { BikesComponent } from './bikes/bikes.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TestComponent } from './test/test.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';
import { MyuserdetailsComponent } from './myuserdetails/myuserdetails.component';
import { ViewmobilesComponent } from './viewmobiles/viewmobiles.component';
import { AddnewmobileComponent } from './addnewmobile/addnewmobile.component';
import {FormsModule} from '@angular/forms';
import { SquarePipe } from './square.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FooterComponent,
    ProductDetailsComponent,
    RegisterComponent,
    HomeComponent,
    ContactusComponent,
    LoginComponent,
    MobilesComponent,
    BikesComponent,
    TelevisionsComponent,
    PagenotfoundComponent,
    TestComponent,
    UserdetailsComponent,
    UsersComponent,
    MyuserdetailsComponent,
    ViewmobilesComponent,
    AddnewmobileComponent,
    SquarePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
