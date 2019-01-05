import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  category: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private cs: CategoryService,
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
        this.cs.editCategory(params['id']).subscribe(res => {
          this.category = res;
      });
    });
  }

  updateCategory(name) {
    this.route.params.subscribe(async params => {
       await this.cs.updateCategory(name, params['id']);
       this.router.navigate(['category']);
    });
  }

}
