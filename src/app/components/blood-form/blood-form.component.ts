import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-blood-form',
  templateUrl: './blood-form.component.html',
  styleUrls: ['./blood-form.component.css']
})
export class BloodFormComponent implements OnInit {
  selecteFile = null;
  error;
  success;

  constructor(private adminService: AdminService) {}

  ngOnInit() {}
  onSubmit() {
    const formData: FormData = new FormData();
    formData.append("blood", this.selecteFile);

    this.adminService.getCategory(formData).subscribe(
      (data) => {
        console.log(data);
        this.handelSuccess(data);
      },
      (error) => {
        console.log(error);
        this.handelError(error);
      }
    );
  }

  onFileUpload(e) {
    this.selecteFile = e.target.files[0];
    console.log(this.selecteFile);
  }
  handelError(error) {
    this.error = error.error.message;
  }
  handelSuccess(succ) {
    this.success = succ.message;
  }

}
