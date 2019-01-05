import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ParameterService } from '../parameter.service';

@Component({
  selector: 'app-parameter-add',
  templateUrl: './parameter-add.component.html',
  styleUrls: ['./parameter-add.component.css']
})
export class ParameterAddComponent implements OnInit {
  angForm: FormGroup;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private ps: ParameterService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      systemName: ['', Validators.required ]
    });
  }

  async addParameter(name, systemName) {
    await this.ps.addParameter(name, systemName);
    this.router.navigate(['parameter']);
  }

  ngOnInit() {
  }
}
