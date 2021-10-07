import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchRoomComponent } from './search-room/search-room.component';
import { BookingComponent } from './booking/booking.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RoomComponent } from './room/room.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { StaffComponent } from './staff/staff.component';
import { RooomComponent } from './rooom/rooom.component';
import { MloginComponent } from './mlogin/mlogin.component';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [
  {path:'search', component: SearchRoomComponent,canActivate:[AuthGuard]},
  {path:'booking/:roomNo', component: BookingComponent,canActivate:[AuthGuard]},
  {path:'signup', component: SignupComponent},
  {path:'login', component: LoginComponent},
  {path:'room', component:RoomComponent},
  {path:'home', component:HomeComponent},
  {path:'staff',component:StaffComponent},
  {path:'rooom',component:RooomComponent},
  {path:'mlogin',component:MloginComponent},
  {path:'manager',component:ManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [SearchRoomComponent,BookingComponent,SignupComponent,LoginComponent,RoomComponent]
