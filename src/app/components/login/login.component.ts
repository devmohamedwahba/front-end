import { TokenServiceService } from "./../../services/token-service.service";
import { LoginService } from "./../../services/login.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public form = {
    email: null,
    password: null,
  };

  public error: null;

  constructor(
    private loginService: LoginService,
    private thokenService: TokenServiceService,
    private router: Router,
    private Auth: AuthService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.loginService.login(this.form).subscribe(
      (data) => {
        switch (data.role.name) {
          case "doctor":
            this.router.navigateByUrl("/admin");
            break;
          case "patient":
            this.router.navigateByUrl("/admin");
            break;
          default:
            break;
        }

        this.handleToken(data);
        this.handleRole(data.role.name);
      },
      (error) => {
        this.handelError(error);
      }
    );
  }

  handelError(error) {
    this.error = error.error.message;
  }

  handleToken(data) {
    this.thokenService.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
  }
  handleRole(data) {
    this.Auth.roleAuth(data);
  }
}
