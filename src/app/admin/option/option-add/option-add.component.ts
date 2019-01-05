import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { OptionService } from '../option.service';


@Component({
  selector: 'app-option-add',
  templateUrl: './option-add.component.html',
  styleUrls: ['./option-add.component.css']
})
export class OptionAddComponent implements OnInit {
  angForm: FormGroup;
  private sub: any;
  parameter_id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder, 
    private os: OptionService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ]
    });
  }

  async addOption(name) {
    await this.os.addOption(name, this.parameter_id);
    this.router.navigate(['parameter']);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.parameter_id = params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
  }
}
