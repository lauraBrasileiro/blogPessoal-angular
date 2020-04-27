import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { threadId } from 'worker_threads';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  getAllPostagens(){
    return this.http.get('http://31.220.57.14:8080/postagens')
  }



}
