import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment.prod';
import { FirebaseService } from './../../services/firebase.service';
import { empty } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 show;
 uname:any;
 upass:any;
 
  constructor(
    private http: HttpClient,
    public cookieservice:CookieService,
    private router: Router,
    private firebaseservice:FirebaseService,
    private spineerservice:NgxSpinnerService
  ) { }
  ngOnInit() {
    if(this.cookieservice.get('username')) {
      this.router.navigateByUrl('updatedashboardforadmin');
    }else{
      this.cookieservice.delete('username');
   }
  }

  onSubmit(form:NgForm){
    this.spineerservice.show();
    let res={
      uname:form.value.uname,
      pword:form.value.upass,
    }
    this.firebaseservice.serachadminuser(res).subscribe(result => {
      this.spineerservice.hide();
        if(result.length!==0){
          this.router.navigateByUrl('updatedashboardforadmin');
          this.cookieservice.set('username', form.value.uname);
          this.cookieservice.set('projectname','OSHRHC');
        }else{
          this.show=true;
          form.reset();
        }
    })
  
  }

}
 