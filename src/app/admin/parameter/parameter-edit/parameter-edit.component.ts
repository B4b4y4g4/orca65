import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ParameterService } from '../parameter.service';

@Component({
  selector: 'app-parameter-edit',
  templateUrl: './parameter-edit.component.html',
  styleUrls: ['./parameter-edit.component.css']
})
export class ParameterEditComponent implements OnInit {
  parameter: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ps: ParameterService,
    private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
        name: ['', Validators.required ],
        systemName: ['', Validators.required ]
      });
    }


  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ps.editParameter(params['id']).subscribe(res => {
          this.parameter = res;
      });
    });
  }

  updateParameter(name, systemName) {
    this.route.params.subscribe(async params => {
       await this.ps.updateParameter(name, systemName, params['id']);
       this.router.navigate(['parameter']);
    });
  }
}
