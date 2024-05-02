import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  private api_url = 'http://localhost:9999/api/v1/teachers';

  constructor(private _http: HttpClient) { }

  getAllTeachers(): Observable<any>{
    return this._http.get<any>(this.api_url + '/all-teachers')
  .pipe(
    map((res)=>{
      return res;
    })
  )}

  getTeacher(id: number): Observable<any>{
    return this._http.get<any>(this.api_url + `/teacher/${id}`)
    .pipe(
      map((res)=>{
        return res;
      })
    )
  }

  editTeacher(data: any, id: number): Observable<any>{
    return this._http.patch<any>(this.api_url + `/update-teacher/${id}`, data)
    .pipe(
      map((res)=>{
        return res;
      })
    )
  }

  deleteTeacher(data: any, id: any): Observable<any>{
    return this._http.delete<any>(this.api_url + `/delete-teacher/${id}`, data)
    .pipe(
      map((res)=>{
        return res;
      })
    )
  }

  createTeacher(data: any): Observable<any>{
    return this._http.post<any>(this.api_url + '/new-teacher', data)
    .pipe(
      map((res)=>{
        return res;
      })
    )
  }
}

