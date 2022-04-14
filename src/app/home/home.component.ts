import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private us:UserService,private router:Router) { }

  ngOnInit(): void {
  }
   getData(obj:any){
     //console.log(obj);
     this.us.loginUser(obj).subscribe(
     )
   }
}
