import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { SubcategoryService } from '../subcategory.service';

@Component({
  selector: 'app-subcategory-edit',
  templateUrl: './subcategory-edit.component.html',
  styleUrls: ['./subcategory-edit.component.css']
})
export class SubcategoryEditComponent implements OnInit {
  subcategory: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private scs: SubcategoryService,
    private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
        name: ['', Validators.required ]
      });
    }


  ngOnInit() {
    this.route.params.subscribe(params => {
        this.scs.editSubcategory(params['id']).subscribe(res => {
          this.subcategory = res;
      });
    });
  }

  updateSubcategory(name) {
    this.route.params.subscribe(async params => {
       await this.scs.updateSubcategory(name, params['id']);
       this.router.navigate(['category']);
    });
  }

}
