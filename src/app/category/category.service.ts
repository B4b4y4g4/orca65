import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  uri = 'http://localhost:4000/category';

  constructor(private http: HttpClient) { }

  addCategory(name) {
    const obj = {
      name: name
    };
    return this.http.post(`${this.uri}/add`, obj)
      .toPromise();
  }

  getCategories() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editCategory(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateCategory(name, id): Promise<Object> {

    const obj = {
        name: name
      };
    return this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .toPromise();
  }

  deleteCategory(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }

  deleteSubcategory(id) {
    return this
              .http
              .get(`${this.uri}/subcategory/delete/${id}`);
  }
}