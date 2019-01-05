import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryGetComponent } from './category/category-get/category-get.component';
import { SubcategoryAddComponent } from './subcategory/subcategory-add/subcategory-add.component';
import { SubcategoryEditComponent } from './subcategory/subcategory-edit/subcategory-edit.component';
import { ParameterAddComponent } from './admin/parameter/parameter-add/parameter-add.component';
import { ParameterEditComponent } from './admin/parameter/parameter-edit/parameter-edit.component';
import { ParameterGetComponent } from './admin/parameter/parameter-get/parameter-get.component';
import { OptionAddComponent } from './admin/option/option-add/option-add.component';
import { OptionEditComponent } from './admin/option/option-edit/option-edit.component';

const routes: Routes = [
  {
    path: 'category/create',
    component: CategoryAddComponent
  },
  {
    path: 'category/edit/:id',
    component: CategoryEditComponent
  },
  {
    path: 'category',
    component: CategoryGetComponent
  },
  {
    path: 'category/subcategory/create/:id',
    component: SubcategoryAddComponent
  },
  {
    path: 'category/subcategory/edit/:id',
    component: SubcategoryEditComponent
  },
  {
    path: 'parameter/create',
    component: ParameterAddComponent
  },
  {
    path: 'parameter/edit/:id',
    component: ParameterEditComponent
  },
  {
    path: 'parameter',
    component: ParameterGetComponent
  },
  {
    path: 'parameter/option/create/:id',
    component: OptionAddComponent
  },
  {
    path: 'parameter/option/edit/:id',
    component: OptionEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
