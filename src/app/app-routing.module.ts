import { UpdatedashboarddetailsComponent } from './updatedashboarddetails/updatedashboarddetails.component';
import { UpdateadmindashboardComponent } from './updateadmindashboard/updateadmindashboard.component';
import { SuccessaddoshrchcmemberComponent } from './components/successaddoshrchcmember/successaddoshrchcmember.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { AddmemberformComponent } from './components/addmemberform/addmemberform.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddadminuserComponent } from './components/addadminuser/addadminuser.component';
import {EditaddmemberformComponent} from './components/editaddmemberform/editaddmemberform.component';
import {DeletedoneComponent} from './components/deletedone/deletedone.component';
import { EditoshrhcaddmemberComponent } from './components/editoshrhcaddmember/editoshrhcaddmember.component';
import { DeleteoshrhcdashboardComponent } from './components/deleteoshrhcdashboard/deleteoshrhcdashboard.component';
import { OshhcdashboardComponent } from './components/oshhcdashboard/oshhcdashboard.component';
import { AddoshrchcmemberformComponent } from './components/addoshrchcmemberform/addoshrchcmemberform.component';
  import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: 'adminlogin', pathMatch: 'full' },
  {path:'adminlogin',component:LoginComponent },
  {path:'adminlogout',component:LogoutComponent },
  {path:'addadminuser',component:AddadminuserComponent },
  {path:'addoshrhcuser',component:AddoshrchcmemberformComponent},
  {path:'addmemberform',component:AddmemberformComponent },
  {path:'header',component:HeaderComponent },
  {path:'dashboard',component:DashboardComponent},
  {path:'oshrhcdashboard',component:OshhcdashboardComponent},
  {path:'deleteoshrhcdashboard',component:DeleteoshrhcdashboardComponent},
  {path:'updatemember',component:EditaddmemberformComponent},
  {path:'updateoshrhcmember',component:EditoshrhcaddmemberComponent},
  {path:'deletedone',component:DeletedoneComponent},
  {path:'successaddmemberoshrhc',component:SuccessaddoshrchcmemberComponent},
  {path:'updatedashboardforadmin',component:UpdateadmindashboardComponent},
  {path:'updatedashboarddetails',component:UpdatedashboarddetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
