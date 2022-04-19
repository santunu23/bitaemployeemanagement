import { FirebaseService } from './../services/firebase.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NgForm, Form } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-editupdatedashboarddetails',
  templateUrl: './editupdatedashboarddetails.component.html',
  styleUrls: ['./editupdatedashboarddetails.component.css']
})
export class EditupdatedashboarddetailsComponent implements OnInit {
  id;
  fullname;
  employeeid;
  remarks;
  designation;
  address;
  contactno;
  joindate;
  resigndate;
  email;
  bankinfo;
  certificates;
  appointmentletter;
  cv;
  nid;

  show;
  successshow;
  constructor(
    private cookieservice:CookieService,
    private router:Router,
    private firebaseservice:FirebaseService,
    private spinner:NgxSpinnerService,
    public db: AngularFirestore, ) { }

  ngOnInit(): void {
    if(!this.cookieservice.check("edituserdetails")){
      this.router.navigateByUrl("updatedashboarddetails")
    }
    let getedituserdetailscookies=JSON.parse(this.cookieservice.get("edituserdetails"));
    this.id=getedituserdetailscookies.id;
    this.fullname=getedituserdetailscookies.fullname;
    this.employeeid=getedituserdetailscookies.emoloyeeid;
    this.email=getedituserdetailscookies.email;
    this.remarks=getedituserdetailscookies.email;
    this.address=getedituserdetailscookies.address;
    this.contactno=getedituserdetailscookies.contactno;
    this.joindate=getedituserdetailscookies.joindate;
    this.resigndate=getedituserdetailscookies.resigndate;
    this.bankinfo=getedituserdetailscookies.bankinfo;
    this.certificates=getedituserdetailscookies.bankinfo;
    this.appointmentletter=getedituserdetailscookies.appointmentletter;
    this.cv=getedituserdetailscookies.cv;
    this.nid=getedituserdetailscookies.nid; 
    this.designation=getedituserdetailscookies.designation;

  }
  async onSubmit(form:NgForm){
    this.spinner.show();
    var dateObj = new Date();
     var month = dateObj.getUTCMonth() + 1; //months from 1-12
     var day = dateObj.getUTCDate();
     var year = dateObj.getUTCFullYear();
     let newdate = day + "/" + month + "/" + year;
     let empresigndate=form.value.resigndate;
     if(empresigndate==="00/00/0000"){
       empresigndate="Still Working"
     }
     if(this.remarks===undefined||this.remarks===false||this.remarks===null){
       this.remarks="No remarks";
     }
      if(this.certificates===undefined||this.certificates===false||this.certificates===null){
        this.certificates="No Certificated Submitted";
     }
     if(this.appointmentletter===undefined||this.appointmentletter===false||this.appointmentletter===null){
       this.appointmentletter="No Appointment letter issued"
     }
     if(this.cv===undefined||this.cv===false||this.cv===null){
       this.cv="No CV Submitted"
     }
     if(this.nid===undefined||this.nid===false||this.nid===null){
       this.nid="No NID submitted"
     }
     if(this.employeeid===undefined||this.employeeid==""){
       this.employeeid="Need to update."
     }
      let res={
        id:this.id,
         fullname:form.value.fullname,
         employeeid:this.employeeid,
         designation:form.value.designation,
         address:form.value.address,
         contactno:form.value.contactno,
         joindate:form.value.joindate,
         resigndate:empresigndate,
         email:form.value.email,
         remarks:this.remarks,
         certificates:this.certificates,
         appointmentletter:this.appointmentletter,
         cv:this.cv,
         nid:this.nid,
         bankinfo:form.value.bankinfo,
        }
        this. firebaseservice.updateoshrhcemployeemember(res).then(result=>{
          this.spinner.hide();
          this.router.navigateByUrl('updatedashboardforadmin');
        });
  }

}
