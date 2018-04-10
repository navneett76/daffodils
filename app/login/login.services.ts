// import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import "rxjs/add/operator/map"; 
import "rxjs/add/operator/catch"; 
import "rxjs/add/observable/throw"; 

@Injectable()
export class LoginServices{
	private _url: string = "http://localhost/laravel/blog/users";
	private _error: string; 
	constructor (private _http: Http){}
	getUsers(){
		return this._http.get(this._url)
			.map((response: Response)=> response.json().users)
			.catch(this._errorhandler);
	}
	_errorhandler(_error: Response){
		return Observable.throw(_error || " Server error.");
	}
}