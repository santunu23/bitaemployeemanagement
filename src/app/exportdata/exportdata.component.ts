import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';
@Component({
  selector: 'app-exportdata',
  templateUrl: './exportdata.component.html',
  styleUrls: ['./exportdata.component.css']
})
export class ExportdataComponent implements OnInit {
  users$: any[] = [];
  csvOptions;
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit(): void {
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
          randomId: e.payload.doc.data()['randomId'],
          remake:e.payload.doc.data()['remarks'],
          bankinfo:e.payload.doc.data()['bankinfo'],
          cv:e.payload.doc.data()['cv'],
          certificates:e.payload.doc.data()['certificates'],
          appointmentletter:e.payload.doc.data()['appointmentletter']
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
        headers: ["Name","Emp ID","Designation","Join Date","Resign Date","Email","Contact No","Address","Profile Picture Link","Signature Link","Created Date","UID","Remarks","Bankinfo","CV","Certification","Appointment Letter"]
      };
      new Angular5Csv(this.users$, "export data", this.csvOptions);
    });
  }

}
