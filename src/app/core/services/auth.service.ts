import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _url: string;

  constructor(private http: HttpClient) { 

    /*************Link with BaseUrl**************** */
    this._url = environment.baseUrl;
  }

  /*************Fetch SuccessStory Data from Server**************** */
  getHomeSuccessStory() {
    return this.http.get<any>(this._url + `content/story/getall`).pipe(map((res: any) => {
      return res;
    }));
  }

}
