import { Component, OnInit } from '@angular/core';
import { NgForm, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from './../../services/firebase.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  list:any;
  fullname:string;
  empimage:any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  projectname;
  users$: any[] = [];
  detailsdata;
  csvOptions;
  fullnamepdf;
  joindatepdf;
  resigndatepdf;
  employeeidpdf;
  emailpdf;
  designationpdf;
  contactnopdf;
  addresspdf;
  employeeid;
  employeeimg;
  returnsigurl;
constructor(
    public firebaseService: FirebaseService,
    private asstorage:AngularFireStorage,
    private cookieservice:CookieService,
    private router:Router,
  ) { }
  downloadexl(){
 this.firebaseService.downloadcsvalldata().subscribe(data=>{
      this.users$ = data.map(e => {
        return {
          fullname: e.payload.doc.data()['fullname'],
          employeeid: e.payload.doc.data()['employeeid'],
          designation:e.payload.doc.data()['designation'],
          joindate: e.payload.doc.data()['joindate'],
          resigndate: e.payload.doc.data()['resigndate'],
          email:e.payload.doc.data()['email'],
          contactno:e.payload.doc.data()['contactno'],
          address:e.payload.doc.data()['address'],
          url: e.payload.doc.data()['url'],
          sigurl: e.payload.doc.data()['signurl'],
          created_at: e.payload.doc.data()['created_at'],
          randomId: e.payload.doc.data()['randomId']
        };
     })
      // this.dtTrigger.next();
      this.csvOptions = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true,
        showTitle: true,
        useBom: true,
        noDownload: false,
        headers: ["Name","Emp ID","Designation","Join Date","Resign Date","Email","Contact No","Address","Profile Picture Link","Signature Link","Created Date","UID"]
      };
      new Angular5Csv(this.users$, "Bita Employee Database", this.csvOptions);
    });
  }
  deleteevent(item){
     this.firebaseService.deleteEvent(item.id,item.randomId);
     this.router.navigateByUrl("deletedone");
 }
 details(item){
this.firebaseService.getselecteduserdata(item.randomId).subscribe(data=>{
      this.list = data.map(e => {
        return {
          id: e.payload.doc['id'],
          fullname: e.payload.doc.data()['fullname'],
          created_at: e.payload.doc.data()['created_at'],
          randomId: e.payload.doc.data()['randomId'],
          url: e.payload.doc.data()['url'],
          sigurl: e.payload.doc.data()['signurl'],
          joindate: e.payload.doc.data()['joindate'],
          resigndate: e.payload.doc.data()['resigndate'],
          employeeid: e.payload.doc.data()['employeeid'],
          email:e.payload.doc.data()['email'],
          bankinfo: e.payload.doc.data()['bankinfo'],
          designation:e.payload.doc.data()['designation'],
          contactno:e.payload.doc.data()['contactno'],
          address:e.payload.doc.data()['address'],
          remarks:e.payload.doc.data()['remarks'],
          certificates:e.payload.doc.data()['certificates'],
          appointmentletter:e.payload.doc.data()['appointmentletter'],
          cv:e.payload.doc.data()['cv'],
          nid:e.payload.doc.data()['nid']
        };
     })
      this.dtTrigger.next();
    })
 }
 generatepdf(item){
       this.firebaseService.searchmemberbyrandomid(item.randomId).subscribe(edata=>{
         edata.map(em=>{
               this.fullnamepdf=em.payload.doc.data()['fullname'];
               this.joindatepdf=em.payload.doc.data()['joindate'];
               this.resigndatepdf=em.payload.doc.data()['resigndate'];
               this.emailpdf=em.payload.doc.data()['email'];
               this.designationpdf=em.payload.doc.data()['designation'];
               this.contactnopdf=em.payload.doc.data()['contactno'];
               this.addresspdf=em.payload.doc.data()['address'];
               this.employeeid=em.payload.doc.data()['employeeid'];
               this.employeeimg=em.payload.doc.data()['url'];
        })
        
        const doc:any=new jsPDF();
        doc.setFont("times");
        doc.setFontSize(20);
        doc.setFontType("bold");
        doc.text("ESHRHC- Employee Data",50,40);
        doc.setFontSize(13);
        doc.setFontType("bold");
        doc.text("Name : "+this.fullnamepdf,50,60);
        doc.text("Employee ID : "+this.employeeid,50,68);
        doc.text("Designation : "+this.designationpdf,50,76);
        doc.text("Join Date : "+this.joindatepdf,50,84);
        doc.text("Resign Date : "+this.resigndatepdf,50,92);
        doc.text("Email ID : "+this.emailpdf,50,100);
        doc.text("Contact Number : "+this.contactnopdf,50,108);
        doc.text("Address : "+this.addresspdf,50,116); 
        doc.save(this.fullnamepdf+" data"+'.pdf');
      });
}
 edit(item){
  if(this.cookieservice.get('membercheck')){
    this.cookieservice.delete('membercheck');
  }
  this.cookieservice.set('membercheck',item.randomId);
  this.router.navigateByUrl('updatemember');
 } 

  ngOnInit(): void {
    if(this.cookieservice.get("projectname")){
      this.cookieservice.delete("projectname");
    }
    this.cookieservice.set("projectname","ESHRHC");
    this.dtOptions={
      destroy:true
    }
    if(!this.cookieservice.get("username")){
      this.router.navigateByUrl('adminlogin');
    }
    this.firebaseService.getallemployeedata().subscribe(data=>{
      this.users$ = data.map(e => {
        return {
          id: e.payload.doc['id'],
          fullname: e.payload.doc.data()['fullname'],
          created_at: e.payload.doc.data()['created_at'],
          randomId: e.payload.doc.data()['randomId'],
          url: e.payload.doc.data()['url'],
          sigurl: e.payload.doc.data()['signurl'],
          joindate: e.payload.doc.data()['joindate'],
          resigndate: e.payload.doc.data()['resigndate'],
          employeeid: e.payload.doc.data()['employeeid'],
          email:e.payload.doc.data()['email'],
          bankinfo: e.payload.doc.data()['bankinfo'],
          designation:e.payload.doc.data()['designation'],
          contactno:e.payload.doc.data()['contactno'],
          address:e.payload.doc.data()['address'],
          remarks:e.payload.doc.data()['remarks'],
          certificates:e.payload.doc.data()['certificates'],
          appointmentletter:e.payload.doc.data()['appointmentletter'],
          cv:e.payload.doc.data()['cv'],
          nid:e.payload.doc.data()['nid']
        }
     })
     this.dtTrigger.next();
    })




  }

}
