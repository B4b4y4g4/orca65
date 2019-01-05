import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatIconModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryGetComponent } from './category/category-get/category-get.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { SubcategoryAddComponent } from './subcategory/subcategory-add/subcategory-add.component';
import { SubcategoryEditComponent } from './subcategory/subcategory-edit/subcategory-edit.component';
import { ParameterGetComponent } from './admin/parameter/parameter-get/parameter-get.component';
import { ParameterAddComponent } from './admin/parameter/parameter-add/parameter-add.component';
import { ParameterEditComponent } from './admin/parameter/parameter-edit/parameter-edit.component';
import { OptionEditComponent } from './admin/option/option-edit/option-edit.component';
import { OptionAddComponent } from './admin/option/option-add/option-add.component';
import { CategoryService } from './category/category.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoryAddComponent,
    CategoryGetComponent,
    CategoryEditComponent,
    SubcategoryAddComponent,
    SubcategoryEditComponent,
    ParameterGetComponent,
    ParameterAddComponent,
    ParameterEditComponent,
    OptionEditComponent,
    OptionAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  exports: [
    MatIconModule
  ],
  providers: [
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
