import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient} from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FirebaseService } from './../../services/firebase.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-addadminuser',
  templateUrl: './addadminuser.component.html',
  styleUrls: ['./addadminuser.component.css']
})
export class AddadminuserComponent implements OnInit {
  fullname:any;
  upass:any;
  uname:any;
  show:any;
  successshow:any;
  items: Array<any>;
  adminusernames: Array<any>;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  users$: any[] = [];
  constructor(private firebaseservice:FirebaseService,
    private router:Router) { }

    ngOnInit(): void {
      this.firebaseservice.getalladminuserdata().subscribe(data=>{
        this.users$ = data.map(e => {
          return {
            id:  e.payload.doc['id'],
            name: e.payload.doc.data()['name'],
            uname: e.payload.doc.data()['uname'],
          };
        })
        this.dtTrigger.next();
      })
  
    }
    deleteadminuser(item){
      this.firebaseservice.deleteadminuser(item.id);
    }
   onSubmit(form:NgForm){
      let value={
        fullname:form.value.fullname,
        uname:form.value.uname,
        pword:form.value.upass,
      }
      
      this.firebaseservice.searchadminusernamevalue(value).subscribe(
        res=>{
          if(res.length!==0){
            this.show=true;
            form.reset();
          }else{
            this.firebaseservice.createUser(value).then(kam=>{
               if(kam.get.length!==0){
                  this.successshow=true;
                  form.reset();
               }
            })
           
          }
        }
      )
  
      
    }

}
