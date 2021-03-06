import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireStorage } from '@angular/fire/storage';

import {HttpClientModule} from '@angular/common/http';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment.prod';
import { DataTablesModule } from 'angular-datatables';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddadminuserComponent } from './components/addadminuser/addadminuser.component';
import { AddmemberformComponent } from './components/addmemberform/addmemberform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddoshrchcmemberformComponent } from './components/addoshrchcmemberform/addoshrchcmemberform.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeletedoneComponent } from './components/deletedone/deletedone.component';
import { DeleteoshrhcdashboardComponent } from './components/deleteoshrhcdashboard/deleteoshrhcdashboard.component';
import { EditaddmemberformComponent } from './components/editaddmemberform/editaddmemberform.component';
import { EditoshrhcaddmemberComponent } from './components/editoshrhcaddmember/editoshrhcaddmember.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { OshhcdashboardComponent } from './components/oshhcdashboard/oshhcdashboard.component';
import { OshhceditdashboardComponent } from './components/oshhceditdashboard/oshhceditdashboard.component';
import { SuccessaddoshrchcmemberComponent } from './components/successaddoshrchcmember/successaddoshrchcmember.component';
import { UpdateadmindashboardComponent } from './updateadmindashboard/updateadmindashboard.component';
import { UpdatedashboarddetailsComponent } from './updatedashboarddetails/updatedashboarddetails.component';
import { UpdateoshrhcuserdetailsComponent } from './updateoshrhcuserdetails/updateoshrhcuserdetails.component';
import { ExportdataComponent } from './exportdata/exportdata.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import {
  faSquare as farSquare,
  faCheckSquare as farCheckSquare,
} from '@fortawesome/free-regular-svg-icons';
import {
  faStackOverflow,
  faGithub,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
import { EditupdatedashboarddetailsComponent } from './editupdatedashboarddetails/editupdatedashboarddetails.component';

@NgModule({
  declarations: [
    AppComponent,
    AddadminuserComponent,
    AddmemberformComponent,
    AddoshrchcmemberformComponent,
    DashboardComponent,
    DeletedoneComponent,
    DeleteoshrhcdashboardComponent,
    EditaddmemberformComponent,
    EditoshrhcaddmemberComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    OshhcdashboardComponent,
    OshhceditdashboardComponent,
    SuccessaddoshrchcmemberComponent,
    UpdateadmindashboardComponent,
    UpdatedashboarddetailsComponent,
    UpdateoshrhcuserdetailsComponent,
    ExportdataComponent,
    EditupdatedashboarddetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    DataTablesModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    FontAwesomeModule,
    CommonModule
  ],
  providers: [CookieService,{provide: LocationStrategy, useClass: HashLocationStrategy},AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faSquare,
      faCheckSquare,
      farSquare,
      farCheckSquare,
      faStackOverflow,
      faGithub,
      faMedium
    );
  }
}
