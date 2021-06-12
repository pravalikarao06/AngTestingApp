import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../app/models/posts.model';
import {User} from '../app/models/users.model'

@Injectable({
  providedIn: 'root'
})
export class FakedataService {

    //inject httpclient obj
  constructor(private hc:HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.hc.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }

  getUsers():Observable<User>{
    return this.hc.get<User>('https://reqres.in/api/users?page=2')
  }

  getPostById(id):Observable<Post>{
    return this.hc.get<Post>('https://jsonplaceholder.typicode.com/posts/'+id)
  }
}
