import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successaddoshrchcmember',
  templateUrl: './successaddoshrchcmember.component.html',
  styleUrls: ['./successaddoshrchcmember.component.css']
})
export class SuccessaddoshrchcmemberComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  gobacktohome(){
    this.router.navigateByUrl("updatedashboardforadmin");
  }
  gobacktoaddmember(){
    this.router.navigateByUrl("addoshrhcuser");
  }

}
