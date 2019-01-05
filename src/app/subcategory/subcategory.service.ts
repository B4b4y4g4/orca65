import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createNgModuleFactory } from '@angular/core/src/view';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  uri = 'http://localhost:4000/category/subcategory';

  constructor(private http: HttpClient) { }

  addSubcategory(name, category_id) {
    const obj = {
      name: name,
      category: category_id,
    };
    return this.http.post(`${this.uri}/add`, obj)
      .toPromise();
  }

  editSubcategory(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateSubcategory(name, id): Promise<Object> {

    const obj = {
        name: name
      };
    return this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .toPromise();
  }

  deleteSubcategory(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}