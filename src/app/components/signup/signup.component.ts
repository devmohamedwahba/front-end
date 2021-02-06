import { AdminService } from "./../../services/admin.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  public form = {
    email: null,
    username: null,
    password: null,
    role_id: null,
    captcha:null
  };


  public error: null;
  public success: null;


  constructor(
    private router: Router,
    private adminService: AdminService
  ) {}

  ngOnInit() {
  }

  onSubmit() {
    this.adminService.createUser(this.form).subscribe(
      data => {
        this.handelSuccess(data)
        this.router.navigate([""]);
      },
      error => {
        this.handelError(error);
      }
    );
  }

  handelError(error) {
    this.error = error.error.message;
  }
     handelSuccess(succ) {
    this.success = succ.message;
  }

  resolved(captchaResponse: string) {
    this.form.captcha = captchaResponse;

    console.log(`${captchaResponse}`);
  }

}
