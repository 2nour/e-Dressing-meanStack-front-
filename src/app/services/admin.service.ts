import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private activateUrl = "http://localhost:3000/admin/acitvate/";
  private getUsersUrl = "http://localhost:3000/admin/getAllUser";

  constructor(private http: HttpClient) { }

  
  activateUser(id: string) {
    return this.http.put<any>(this.activateUrl + id, id);

  }
  
  
  getUsers() {
    return this.http.get<any>(this.getUsersUrl);

  }

  
}
