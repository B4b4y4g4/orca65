import { Component, OnInit } from '@angular/core';
import Category from '../Category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { SubcategoryService } from '../../subcategory/subcategory.service';
import Subcategory from 'src/app/subcategory/Subcategory';

@Component({
  selector: 'app-category-get',
  templateUrl: './category-get.component.html',
  styleUrls: ['./category-get.component.css']
})
export class CategoryGetComponent implements OnInit {
  categories: Category[];
  selectedCategory: Category;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cs: CategoryService,
    private scs: SubcategoryService) { }

  ngOnInit() {
    this.cs
      .getCategories()
      .subscribe((data: Category[]) => {
        this.categories = data;
    });
  }

  deleteCategory(id, catName) {
    this.cs.deleteCategory(id).subscribe(res => {
      this.cs.getCategories()
      .subscribe((data: Category[]) => {
        if(this.selectedCategory == catName){
          if(this.selectedCategory.name == catName){
            this.selectedCategory = null;
          }
        }
        this.categories = data;
      });
    });
  }

  deleteSubcategory(id) {
    this.cs.deleteSubcategory(id).subscribe(res => {
      var selectedCategoryName = this.selectedCategory.name;
      this.categories = null;
      this.cs.getCategories()
      .subscribe((data: Category[]) => {
        this.categories = data;
        var selectedCat = this.categories.filter(category => {
          return category.name === selectedCategoryName
        })[0];
        this.selectedCategory = selectedCat;
      });
    });
  }

  onSelect(category: Category): void {
    if(this.selectedCategory == category){
      this.selectedCategory = null;
      return;
    }
    this.selectedCategory = category;
    return;
  }

}
