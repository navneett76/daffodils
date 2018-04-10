import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
//import * as Rx from 'rxjs';

import { User } from '../_models/index';

// https://www.youtube.com/watch?v=4uajiXW5R3o
// https://www.youtube.com/watch?v=84bXch-YIvI

@Injectable()
export class UserService {

    _err: any;
    constructor(private http: Http) { }

    getAll(): Observable<any> {
        return this.http.get('http://localhost/laravel/blog/users')
        .map((response: Response)=>{
            return response.json().users;
        })
        .catch(this._usererrorHandler);
    }

    _usererrorHandler(_err: Response){
        return Observable.throw(this._err || "Server Error!!");
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }

    create(user: User) {
        // console.log(user);
        return this.http.post('http://localhost/laravel/blog/users', user)
        .map((responce: Response)=> {
            return responce.json().message;
        });
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }
}