import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-updateadmindashboard',
  templateUrl: './updateadmindashboard.component.html',
  styleUrls: ['./updateadmindashboard.component.css']
})
export class UpdateadmindashboardComponent implements OnInit {
  users$: any[] = [];
  lPM;
  lDPM;
  lMNO;
  lTC;
  lTE;
  lFAO; 
  lIMO;
  lCM;
  lSM; 
  lSG;
  lVT;
  
  constructor(
    private service:FirebaseService,
    private router:Router,
    private spinner:NgxSpinnerService,
    private updateadmindashboarddata:CookieService) { }

  ngOnInit(): void {
  this.spinner.show();
   let PM=0;
   let DPM=0;
   let MNO=0;
   let TC=0;
   let TE=0;
   let FAO=0; 
   let IMO=0;
   let CM=0;
   let SM=0;
   let SG=0;
   let VT=0;
    this.service.getupdateuserdata().subscribe(data=>{
      this.users$ = data.map(e=>{
        this.spinner.hide();
       let a=e.payload.doc.data()['designation']
      if(a==="Program Manager"){
        PM +=1
       }else if(a==="Deputy Program Manager"){
         DPM+=1
       }else if(a==="Monitoring & Documentation Officer"){
         MNO+=1
       }else if(a==="Training Coordinator"){
         TC+=1
       }else if(a==="Technical Expert(ICT)"){
         TE+=1 
       }else if(a==="Information management officer"){
        IMO+=1
       } else if(a==="Finance & Admin Officer"){
         FAO+=1
       }else if(a==="Center Manager"){
        CM+=1
      }else if(a==="Social Mobilizer"){
         SM+=1
       }else if(a==="Security Guard"){
         SG+=1
       }else if(a==="Volunteer"){
         VT+=1
       }
       });
       this.spinner.hide();
      this.lPM=PM;
      this.lDPM=DPM;
      this.lMNO=MNO;
      this.lTC=TC;
      this.lTE=TE;
      this.lFAO=FAO; 
      this.lIMO=IMO;
      this.lCM=CM;
      this.lSM=SM; 
      this.lSG=SG;
      this.lVT=VT;
       
    })
    
     
  } 
  checkdetails(dname){
        if(this.updateadmindashboarddata.check("employeedesignationdashboard")){
           this.updateadmindashboarddata.delete("employeedesignationdashboard");
     
      this.updateadmindashboarddata.set("employeedesignationdashboard",dname); 
     
      this.router.navigateByUrl("updatedashboarddetails");
    }else{
      this.updateadmindashboarddata.set("employeedesignationdashboard",dname); 
     
      this.router.navigateByUrl("updatedashboarddetails");
    }
  }
}
