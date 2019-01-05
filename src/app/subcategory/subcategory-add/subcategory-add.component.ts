import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { SubcategoryService } from '../subcategory.service';

@Component({
  selector: 'app-subcategory-add',
  templateUrl: './subcategory-add.component.html',
  styleUrls: ['./subcategory-add.component.css']
})
export class SubcategoryAddComponent implements OnInit {
  angForm: FormGroup;
  private sub: any;
  category_id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder, 
    private scs: SubcategoryService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ]
    });
  }

  async addSubcategory(name) {
    await this.scs.addSubcategory(name, this.category_id);
    this.router.navigate(['category']);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.category_id = params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
  }
}
