import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  _url: string;

  constructor(private http: HttpClient) { 
    /*************Link with BaseUrl**************** */
    this._url = environment.baseUrl;
  }
  
  /*************Fetch Circular Data from Server**************** */
  getAllCircularUpload() {
    return this.http.get<any>(this._url + 'circulars/getall').pipe(map((res: any) => {
      // console.log(">>>>>>>>>getAllCircularUpload>>>>>>>>>>", res)
      return res;
    }));
  }

}
