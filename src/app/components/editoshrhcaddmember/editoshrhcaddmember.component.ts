import { Component, OnInit } from '@angular/core';
import { NgForm, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from './../../services/firebase.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-editoshrhcaddmember',
  templateUrl: './editoshrhcaddmember.component.html',
  styleUrls: ['./editoshrhcaddmember.component.css']
})
export class EditoshrhcaddmemberComponent implements OnInit {
  randomID;
  lists;
  fullname;
  successshow;
  show;
  id;
  updatememberdata;
  sigimage;
  created_at;
  joindate;
  resigndate;
  employeeid;
  email;
  designation;
  contactno;
  address;
  emplimage;
  remarks;
  certificates;
  appointmentletter;
  cv;
  nid;
  getcertificatechekedvalue;
  getappointmentletter;
  getcv;
  getnid;
 
  sigurl;
  getsubmitcv;
  getsubcertificate;
  getsubappointmentletter;
  getsubnid
  
  submitcertificates;
  submitappointmentletter;
  submitcv;
  submitnid;
  sigURL;
  ref;
  task;
  uploadedsigURL;
  bankinfo;
  constructor(
    private cookieservice:CookieService,
    private router:Router,
    private  firebase:FirebaseService,
    private spinner: NgxSpinnerService,
    private asstorage:AngularFireStorage
  ) { }

  ngOnInit(): void {
    if(!this.cookieservice.get('membercheck')){
      this.router.navigateByUrl('dashboard');
    }
   this.randomID=this.cookieservice.get('membercheck');
    this.firebase.searchmemberbyrandomidoshrhc(this.randomID).subscribe(data=>{
      this.lists=data.map(e=>{
        this.id=e.payload.doc['id'],
        this.fullname=e.payload.doc.data()['fullname'],
        this.created_at=e.payload.doc.data()['created_at'],
        this.randomID=e.payload.doc.data()['randomId'],
        this.joindate=e.payload.doc.data()['joindate'],
        this.resigndate=e.payload.doc.data()['resigndate'],
        this.employeeid=e.payload.doc.data()['employeeid'],
        this.email=e.payload.doc.data()['email'],
        this.bankinfo=e.payload.doc.data()['bankinfo'],
        this.designation=e.payload.doc.data()['designation'],
        this.contactno=e.payload.doc.data()['contactno'],
        this.address=e.payload.doc.data()['address'],
        this.remarks=e.payload.doc.data()['remarks']
        this.certificates=e.payload.doc.data()['certificates'];
        this.appointmentletter=e.payload.doc.data()['appointmentletter'];
        this.cv=e.payload.doc.data()['cv'];
        this.nid=e.payload.doc.data()['nid'];
        this.sigurl=e.payload.doc.data()['signurl'];
       
      })
      if(this.certificates==="No Certificated Submitted"){
        this.getcertificatechekedvalue=false;
      }else{
        this.getcertificatechekedvalue=true;
      }

      if(this.appointmentletter==="No Appointment letter issued"){
        this.getappointmentletter=false;
      }else{
        this.getappointmentletter=true;
      }
      if(this.cv==="No CV Submitted"){
        this.getcv=false;
      }else{
        this.getcv=true;
      }
     
     if(this.nid==="No NID submitted"){
        this.getnid=false;
      }else{
        this.getnid=true;
      }
    });
  }
  updateuploadsignature(event){
    this.spinner.show();
    this.firebase.deletepicture(this.randomID);
    this.ref = this.asstorage.ref(this.randomID+"signatureimage");
    this.task = this.ref.put(event.target.files[0]).then((res)=>{
      if(res){
      const downloadURL=this.ref.getDownloadURL().subscribe(url=>{
        this.uploadedsigURL=url;
        this.spinner.hide();
        console.log(this.uploadedsigURL);
      })
      }
    }).catch(error=>{
      console.log(error); 
   })

  }
  async onSubmit(form: NgForm){
    this.spinner.show();
    let empresigndate=form.value.resigndate;
    let emcv=form.value.cv;
    let emcertificates=form.value.certificates;
    let emappointmentletter=form.value.appointmentletter;
    let emnid=form.value.nid;
    if(form.value.sigimage===undefined){
      this.sigURL=this.sigurl;
    }else{
      this.sigURL=this.uploadedsigURL;
    }

    if(empresigndate==="00/00/0000"){
      empresigndate="Still Working"
    }
    if(this.remarks===undefined||this.remarks===false||this.remarks===null){
      this.remarks="No remarks";
    }else{
      this.remarks=form.value.remarks;
    }
     if(emcertificates===undefined||emcertificates===false||emcertificates===null){
      this.getsubcertificate="No Certificated Submitted";
    }else{
      this.getsubcertificate=true;
    }
    if(emappointmentletter===undefined||emappointmentletter===false||emappointmentletter===null){
      this.getsubappointmentletter="No Appointment letter issued";
    }else{
      this.getsubappointmentletter=true;
    }
    if(emcv===undefined||emcv===false||emcv===null){
      this.getsubmitcv="No CV Submitted";
    }else{
      this.getsubmitcv=true;
    }

    if(emnid===undefined||emnid===false||emnid===null){
      this.getsubnid="No NID submitted";
    }else{
      this.getsubnid=true;
    }
      let res={
        id:this.id,
        fullname:form.value.fullname,
        randomId:this.randomID,
        joindate:form.value.joindate,
        resigndate:empresigndate,
        employeeid:form.value.employeeid,
        email:form.value.email,
        bankinfo:form.value.bankinfo,
        designation:form.value.designation,
        contactno:form.value.contactno,
        address:form.value.address,
        submitcertificates:this.getsubcertificate,
        submitappointmentletter: this.getsubappointmentletter,
        submitcv: this.getsubmitcv,
        submitnid:this.getsubnid,
        remarks:this.remarks,
        sigurl:this.sigURL
      }
      this.firebase.updateoshrchmemberdata(res).then(kam=>{
        this.spinner.hide();
        this.router.navigateByUrl('oshrhcdashboard');
      })
  }
}
