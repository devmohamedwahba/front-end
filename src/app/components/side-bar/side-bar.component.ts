import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  userRole:string;

  constructor(private authService:AuthService) { }

  ngOnInit() {
   this.userRole =  this.authService.userRole
  }

  

}
