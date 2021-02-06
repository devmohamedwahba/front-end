import { Recipe } from "./../interfaces/recipe";
import { User } from "./../interfaces/user";
import { Roles } from "./../interfaces/roles";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Drug } from "../interfaces/drug";
import { tick } from "@angular/core/testing";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  private url = "http://127.0.0.1:5000";

  constructor(private http: HttpClient) {}

  createUser(Form) {
    console.log(Form);
    return this.http.post(`${this.url}/register`, Form);
  }
  getCategory(form) {
    return this.http.post(`${this.url}/blood`, form);
  }

  getBloodPressure() {
    return this.http.get<any[]>(`${this.url}/blood`);
  }

  deleteUser(id) {
    return this.http.delete(`${this.url}/user/${id}`);
  }






  








}
