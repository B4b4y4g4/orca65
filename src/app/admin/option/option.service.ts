import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createNgModuleFactory } from '@angular/core/src/view';

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  uri = 'http://localhost:4000/admin/parameter/option';

  constructor(private http: HttpClient) { }

  addOption(name, parameter_id) {
    const obj = {
      name: name,
      parameter: parameter_id,
    };
    return this.http.post(`${this.uri}/add`, obj)
      .toPromise();
  }

  editOption(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateOption(name, id): Promise<Object> {

    const obj = {
        name: name
      };
    return this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .toPromise();
  }

  deleteOption(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}