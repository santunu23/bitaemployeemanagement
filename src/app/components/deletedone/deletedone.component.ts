import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deletedone',
  templateUrl: './deletedone.component.html',
  styleUrls: ['./deletedone.component.css']
})
export class DeletedoneComponent implements OnInit {

  constructor(
    private router:Router
  ) { }
  gobacktohome(){
    this.router.navigateByUrl("dashboard");
  }
  ngOnInit(): void {
  }

}
