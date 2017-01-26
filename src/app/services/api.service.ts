import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class ApiService {
  users
  constructor(private http: Http) { }

  getUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(
      (res) => this.users = res.json(),
      (err) => console.log(console.warn(JSON.stringify(err)))
    )
  }


}
