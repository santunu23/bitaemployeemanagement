import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

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
    private updateadmindashboarddata:CookieService) { }

  ngOnInit(): void {
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
       let a=e.payload.doc.data()['designation']
      if(a==="Program Manager"){
        PM +=1
       }else if(a==="Deputy Program Manager"){
         DPM+=1
       }else if(a==="Monitoring & Documentation Officer"){
         MNO+=1
       }else if(a==="Training Coordinator"){
         TC+=1
       }else if(a==="Technical Expert"){
         TE+=1 
       }else if(a==="Information Management Officer"){
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
      //  console.log("Total PM is "+PM);
      //  console.log("Total DPM is "+DPM);
      //  console.log("Total MNO is "+MNO);
      //  console.log("Total TC is "+TC);
      //  console.log("Total TE is "+TE);
      //  console.log("Total FAO is "+FAO);
      //  console.log("Total IMO is "+IMO);
      //  console.log("Total CM is "+CM);
      //  console.log("Total SM is "+SM);
      //  console.log("Total SG is "+SG); 
      //  console.log("Total VT is "+ VT); 
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
  // checkdetails(dname){
  //   this.router.navigateByUrl("updatedashboardforadmin",{state:dname})
    
  // }
}
