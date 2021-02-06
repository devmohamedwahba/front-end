import { AuthService } from "src/app/services/auth.service";
import { Router, NavigationEnd } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AdminService } from "src/app/services/admin.service";

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.css"],
})
export class AdminLayoutComponent implements OnInit {
  toggleClass = false;
  userRole: string;
  url;


 
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    this.router.events.subscribe((event): void => {
      if (event instanceof NavigationEnd) {
        this.url = this.router.isActive("/admin", true);
      }
    });
  }

  ngOnInit() {
    this.userRole = this.authService.userRole;
  }

  addUser(e) {
    event.preventDefault();
    this.router.navigateByUrl("/signup");
  }

  home() {
    this.router.navigateByUrl("/admin");
  }

  onActiveSideBar() {
    this.toggleClass = !this.toggleClass;
  }






}
