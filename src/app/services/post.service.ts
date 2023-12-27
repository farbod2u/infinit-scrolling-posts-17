import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../model/post";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // backend URL
  private apiUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {
  }

  getPosts(page: number, pageSize: number): Observable<Post[]> {
    const queryParams = `?page=${page}&pageSize=${pageSize}`;

    return this.http.get<Post[]>(this.apiUrl + queryParams);
  }
}
