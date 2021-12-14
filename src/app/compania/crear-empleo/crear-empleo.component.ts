import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpleosService } from '../../Services/EmpleosService';
import { Modality } from '../../Models/modality';

@Component({
  selector: 'app-crear-empleo',
  templateUrl: './crear-empleo.component.html',
  styleUrls: ['./crear-empleo.component.css']
})
export class CrearEmpleoComponent implements OnInit {
  public lstModality: Modality[] = [];
  public jobForm: FormGroup;

  constructor(private fb: FormBuilder, private empleosService: EmpleosService) {
    this.jobForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      description_headline: ['', [Validators.required]],
      functions: ['', [Validators.required]],
      remote_modality: ['', [Validators.required]],
      min_salary: ['', [Validators.required]],
      max_salary: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.empleosService.modalities().subscribe(
      res => {
        this.lstModality = res.data;
        console.log(res)
      }
    )
  }

  onlyNumeros(event: any) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }

  onCreate() {
    console.log(this.jobForm.value)
  }

}
