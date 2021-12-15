import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpleosService } from '../../Services/EmpleosService';
import { Modality } from '../../Models/modality';
import { AttributeDto } from '../../Models/AttributeDto';
import { Seniority } from 'src/app/Models/seniorities';

@Component({
  selector: 'app-crear-empleo',
  templateUrl: './crear-empleo.component.html',
  styleUrls: ['./crear-empleo.component.css']
})
export class CrearEmpleoComponent implements OnInit {
  public job: AttributeDto;
  public lstModality: Modality[] = [];
  public lstSeniorities: Seniority[] = []
  public jobForm: FormGroup;

  constructor(private fb: FormBuilder, private empleosService: EmpleosService) {
    this.job = new AttributeDto();

    this.jobForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      description_headline: ['', [Validators.required]],
      functions: ['', [Validators.required]],
      remote_modality: ['', [Validators.required]],
      seniority_id: ['', [Validators.required]],
      min_salary: ['', [Validators.required]],
      max_salary: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.empleosService.modalities().subscribe(
      res => {
        this.lstModality = res.data;
      }
    )

    this.empleosService.seniorities().subscribe(
      res => {
        this.lstSeniorities = res.data;
        console.log(this.lstSeniorities)
      }
    )
  }

  onlyNumeros(event: any) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }

  onCreate() {
    this.job = this.jobForm.value;
    console.log(this.job)
    this.empleosService.crearJob(this.job).subscribe(
      res => {
        console.log(res)
        this.jobForm.reset({
          remote_modality: ''
        });
      }
    )
  }

}
