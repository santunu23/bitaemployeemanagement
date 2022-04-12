import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deleteoshrhcdashboard',
  templateUrl: './deleteoshrhcdashboard.component.html',
  styleUrls: ['./deleteoshrhcdashboard.component.css']
})
export class DeleteoshrhcdashboardComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  gobacktohome(){
    this.router.navigateByUrl("oshrhcdashboard");
  }
}
