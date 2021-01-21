import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usersDataPath = './assets/usersData.json';
  users: User[];
  constructor(private httpService: HttpClient) {
  }
  getUser(): Observable<any> {
    return this.httpService.get(this.usersDataPath);
  }
}
