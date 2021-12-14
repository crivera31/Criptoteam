import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpleosService } from '../../Services/EmpleosService';

@Component({
  selector: 'app-crear-empleo',
  templateUrl: './crear-empleo.component.html',
  styleUrls: ['./crear-empleo.component.css']
})
export class CrearEmpleoComponent implements OnInit {
  public jobForm: FormGroup;

  constructor(private fb: FormBuilder, private empleosService: EmpleosService) {
    this.jobForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      description_headline: ['', [Validators.required]],
      functions: ['', [Validators.required]],
      min_salary: ['', [Validators.required]],
      max_salary: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onlyNumeros(event: any) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }

  onCreate() {
    console.log(this.jobForm.value)
  }

}
