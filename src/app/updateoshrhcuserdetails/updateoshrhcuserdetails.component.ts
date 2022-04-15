import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-updateoshrhcuserdetails',
  templateUrl: './updateoshrhcuserdetails.component.html',
  styleUrls: ['./updateoshrhcuserdetails.component.css']
})
export class UpdateoshrhcuserdetailsComponent implements OnInit {
  userid;
  userrandomid;
  username;
  userdesignation;
  userjoindate;
  userresigndate;
  useraddress;
  userappointmentletter;
  userbankinfo;
  usercertificates;
  usermobileno;
  usercv;
  useremail;
  usernid;
  usersignurl;
  userpictureurl;

  constructor(
    private service:FirebaseService,
    private cookieservice:CookieService,
    private router:Router
  ) { }

  ngOnInit(): void {
    if(!this.cookieservice.check("userdetails")){
      this.router.navigateByUrl("updatedashboarddetails");
    }else{
      let userdetails=JSON.parse(this.cookieservice.get("userdetails"));
       this.userid=userdetails.id;
       this.userrandomid=userdetails.randomId;
       this.usernid=userdetails.nid;
       if(this.usernid){
         this.usernid="Yes"
       }else{
         this.usernid="No"
       }
       this.username=userdetails.fullname;
       this.userdesignation=userdetails.designation;
       this.useraddress=userdetails.address;
       this.userjoindate=userdetails.joindate;
       this.userresigndate=userdetails.resigndate;
       this.userbankinfo=userdetails.bankinfo;
       this.usermobileno=userdetails.contactno;
       this.usercv=userdetails.cv;
       if(this.usercv){
         this.usercv="Yes"
       }else{
         this.usercv="No"
       }
       this.usercertificates=userdetails.certificates;
       if(this.usercertificates){
         this.usercertificates="Yes"
       }else{
         this.usercertificates="No"
       }
       this.userappointmentletter=userdetails.appointmentletter;
       if(this.userappointmentletter){
         this.userappointmentletter="Yes"
       }else{
         this.userappointmentletter="No"
       }
       this.useremail=userdetails.email;
       this.usersignurl=userdetails.sigurl;
       this.userpictureurl=userdetails.url;
    }
  }
  backtodashboard(){
    this.cookieservice.delete("userdetails");
    this.router.navigateByUrl("updatedashboardforadmin");
  }

}
