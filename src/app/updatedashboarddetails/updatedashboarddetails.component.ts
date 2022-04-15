import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FirebaseService } from '../services/firebase.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-updatedashboarddetails',
  templateUrl: './updatedashboarddetails.component.html',
  styleUrls: ['./updatedashboarddetails.component.css']
})
export class UpdatedashboarddetailsComponent implements OnInit {
  list:any;
  fullname:string;
  empimage:any;
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
    private employeecokkie:CookieService,
    private service: FirebaseService,
    private router:Router,
    private cookieservice:CookieService,
    private spinner:NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    if(!this.employeecokkie.check("employeedesignationdashboard")){
      this.router.navigateByUrl("updatedashboardforadmin");
    }else{
      let getdata=this.employeecokkie.get("employeedesignationdashboard");
      this.service.searchmemberbynameoshrhc(getdata).subscribe(data=>{ 
        this.users$ = data.map(e => {
          return {
            id:e.payload.doc['id'],
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
          this.spinner.hide()
       });
      });
    }

     
  }
  showdetails(data){
    if(this.cookieservice.check("userdetails")){
      this.cookieservice.delete("userdetails");
    }
    this.cookieservice.set("userdetails",JSON.stringify(data));
    this.router.navigateByUrl("detailsoftheoshrhcdetails");
  }
}
