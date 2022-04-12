import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from './../../services/firebase.service';
import { NgForm, Form } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-addoshrchcmemberform',
  templateUrl: './addoshrchcmemberform.component.html',
  styleUrls: ['./addoshrchcmemberform.component.css']
})
export class AddoshrchcmemberformComponent implements OnInit {
  show;
  ref;
  downloadURL;
  URL;
  task;
  emplimage;
  fullname;
  successshow;
  imageupload;
  uploadedemplimage;
  sigURL;
  randomId= Math.random().toString(36).substring(2);
  employeeid;
  designation;
  address;
  contactno;
  joindate;
  resigndate;
  email;
  sigimage;
  remarks;
  certificates;
  appointmentletter;
  cv;
  nid;
  bankinfo;

  constructor(
    private router: Router,
    public firebaseService: FirebaseService,
    private asstorage:AngularFireStorage,
    private spinner: NgxSpinnerService,
    private cookieservice: CookieService
  ) { 

  }

  ngOnInit(): void {
    if(this.cookieservice.get("projectname")){
      this.cookieservice.delete("projectname");
    }
    this.cookieservice.set("projectname","OSHRC");
  }
  uploadsignature(event){
    this.spinner.show();
    this.ref = this.asstorage.ref(this.randomId+"signatureimage");
    this.task = this.ref.put(event.target.files[0]).then((res)=>{
      if(res){
      const downloadURL=this.ref.getDownloadURL().subscribe(url=>{
       this.sigURL=url;
        this.spinner.hide();
      })
      }
    }).catch(error=>{
      console.log(error); 
   })
  }
  upload(event) {
    this.spinner.show();
    this.ref = this.asstorage.ref(this.randomId);
    this.task = this.ref.put(event.target.files[0]).then((res)=>{
      if(res){
      const downloadURL=this.ref.getDownloadURL().subscribe(url=>{
        URL=url;
        this.spinner.hide();
      })
      }
    }).catch(error=>{
      console.log(error); 
   })
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
      if(this.sigURL===undefined){
        this.sigURL="No Image uploaded";
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
       let res={
          fullname:form.value.fullname,
          randomId:this.randomId,
          created_at: newdate,
          url:URL,
          sigurl:this.sigURL,
          employeeid:form.value.employeeid,
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
         this.firebaseService.createoshrhcemployeemember(res).then(kam=>{
          if(kam.get.length!==0){
            this.spinner.hide();
             form.reset();
             this.router.navigateByUrl("successaddmemberoshrhc");
           
          }
       })
      
    }

}
