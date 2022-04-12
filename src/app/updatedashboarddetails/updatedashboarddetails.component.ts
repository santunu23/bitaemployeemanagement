import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updatedashboarddetails',
  templateUrl: './updatedashboarddetails.component.html',
  styleUrls: ['./updatedashboarddetails.component.css']
})
export class UpdatedashboarddetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(JSON.stringify(history.state));
    // this.service.searchmemberbynameoshrhc(dname).subscribe(data=>{
    //   this.users$ = data.map(e => {
    //     return {
    //       id: e.payload.doc['id'],
    //       fullname: e.payload.doc.data()['fullname'],
    //       created_at: e.payload.doc.data()['created_at'],
    //       randomId: e.payload.doc.data()['randomId'],
    //       url: e.payload.doc.data()['url'],
    //       sigurl: e.payload.doc.data()['signurl'],
    //       joindate: e.payload.doc.data()['joindate'],
    //       resigndate: e.payload.doc.data()['resigndate'],
    //       employeeid: e.payload.doc.data()['employeeid'],
    //       email:e.payload.doc.data()['email'],
    //       bankinfo: e.payload.doc.data()['bankinfo'],
    //       designation:e.payload.doc.data()['designation'],
    //       contactno:e.payload.doc.data()['contactno'],
    //       address:e.payload.doc.data()['address'],
    //       remarks:e.payload.doc.data()['remarks'],
    //       certificates:e.payload.doc.data()['certificates'],
    //       appointmentletter:e.payload.doc.data()['appointmentletter'],
    //       cv:e.payload.doc.data()['cv'],
    //       nid:e.payload.doc.data()['nid']
    //     };
    //  })
    // })
  }

}
