import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  uri = 'http://localhost:4000/admin/parameter';

  constructor(private http: HttpClient) { }

  addParameter(name, systemName) {
    const obj = {
      name: name,
      systemName: systemName
    };
    return this.http.post(`${this.uri}/add`, obj)
      .toPromise();
  }

  getParameters() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editParameter(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateParameter(name, systemName, id): Promise<Object> {

    const obj = {
        name: name,
        systemName: systemName
      };
    return this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .toPromise();
  }

  deleteParameter(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }

  deleteOption(id) {
    return this
              .http
              .get(`${this.uri}/option/delete/${id}`);
  }
}