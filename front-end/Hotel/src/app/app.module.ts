import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { RoomComponent } from './room/room.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './shared/user.service';
import { AuthGuard } from './auth.guard';
import { BookingService } from './shared/booking.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { RooomComponent } from './rooom/rooom.component';
import { ManagerComponent } from './manager/manager.component';
import { StaffComponent } from './staff/staff.component';
import { MloginComponent } from './mlogin/mlogin.component';
import { MsignupComponent } from './msignup/msignup.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RoomComponent,
    HomeComponent,
    RooomComponent,
    ManagerComponent,
    StaffComponent,
    MloginComponent,
    MsignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [UserService, AuthGuard,BookingService,{
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
